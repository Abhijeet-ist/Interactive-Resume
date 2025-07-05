// Initialize Locomotive Scroll
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main1'),
//   smooth: true,
//   lerp: 0.04,
//   smartphone: {
//     smooth: true,
//     lerp: 0.05
//   },
//   tablet: {
//     smooth: true,
//     lerp: 0.05
//   }
// });

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
  const barsIcon = document.querySelector('.menu-toggle .fa-bars');
  const timesIcon = document.querySelector('.menu-toggle .fa-times');
  
  // Function to check if we're in mobile view
  function isMobileView() {
    return window.innerWidth <= 768;
  }
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      // Only toggle if in mobile view
      if (isMobileView()) {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open'); // Add this class to prevent scrolling
        
        // Toggle visibility of icons
        if (barsIcon && timesIcon) {
          barsIcon.style.display = barsIcon.style.display === 'none' ? 'block' : 'none';
          timesIcon.style.display = timesIcon.style.display === 'none' ? 'block' : 'none';
        }
      }
    });
  }
    // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (isMobileView() && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
        
        // Reset icons
        if (barsIcon && timesIcon) {
          barsIcon.style.display = 'block';
          timesIcon.style.display = 'none';
        }
      }
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (mainNav && mainNav.classList.contains('active')) {
      if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
        
        // Reset icons
        if (barsIcon && timesIcon) {
          barsIcon.style.display = 'block';
          timesIcon.style.display = 'none';
        }
      }
    }
  });
  
  // Reset menu state on window resize
  window.addEventListener('resize', function() {
    if (!isMobileView() && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      menuToggle.classList.remove('active');
      document.body.classList.remove('menu-open');
      
      // Reset icons
      if (barsIcon && timesIcon) {
        barsIcon.style.display = 'block';
        timesIcon.style.display = 'none';
      }
    }
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

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('pageheader');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Check if it's a mobile device
function isMobile() {
  return window.innerWidth <= 768;
}

// Add resize handler for responsive adjustments
window.addEventListener('resize', function() {
  // Function to check if we're in mobile view
  function isMobileView() {
    return window.innerWidth <= 768;
  }
  
  // Reset menu state when resizing from mobile to desktop
  const mainNav = document.querySelector('.main-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (!isMobileView() && mainNav && mainNav.classList.contains('active')) {
    // If resizing to desktop and menu is open, close it
    mainNav.classList.remove('active');
    if (menuToggle) {
      menuToggle.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
    document.body.classList.remove('menu-open');
  }
  
  if (isMobile()) {
    // Mobile-specific adjustments
    if (typeof scroll !== 'undefined' && scroll) {
      scroll.update();
    }
  } else {
    // Desktop-specific adjustments
    if (typeof scroll !== 'undefined' && scroll) {
      scroll.update();
    }
  }
});

// Fix excessive scrolling
document.addEventListener('DOMContentLoaded', function() {
  // Function to adjust container height to prevent extra scrolling
  function adjustContainerHeight() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;
    
    // Check if document is taller than it needs to be
    if (documentHeight > windowHeight + footerHeight + 100) {
      // Trim excess height from main container
      const excessHeight = documentHeight - (windowHeight + footerHeight);
      const main = document.getElementById('main1');
      if (main) {
        main.style.marginBottom = `-${excessHeight}px`;
      }
    }
  }
  
  // Run on page load
  adjustContainerHeight();
  
  // Run when window is resized
  window.addEventListener('resize', adjustContainerHeight);
});

