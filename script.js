// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main1'),
  smooth: true,
  lerp: 0.04,
  smartphone: {
    smooth: true,
    lerp: 0.05
  },
  tablet: {
    smooth: true,
    lerp: 0.05
  }
});

// Initialize Typed.js for text animation
document.addEventListener('DOMContentLoaded', function() {
  // Check if typed-text element exists
  const typedElement = document.querySelector('.typed-text');
  
  if (typedElement) {
    const typed = new Typed('.typed-text', {
      strings: ['Web Developer', 'Computer Engineering Student', 'Frontend Enthusiast'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 1500,
      startDelay: 500
    });
  }
  
  // Set current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });
  }
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      mainNav.classList.remove('active');
    });
  });
});

// Intersection Observer for animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  fadeElements.forEach(element => {
    fadeObserver.observe(element);
  });
});

// Add active class to nav items on scroll
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a');
  
  function highlightNavOnScroll() {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavOnScroll);
  window.addEventListener('load', highlightNavOnScroll);
});

// Check if it's a mobile device
function isMobile() {
  return window.innerWidth <= 768;
}

// Add resize handler for responsive adjustments
window.addEventListener('resize', function() {
  if (isMobile()) {
    // Mobile-specific adjustments
    scroll.update();
  } else {
    // Desktop-specific adjustments
    scroll.update();
  }
});

