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

// Initialize on load
window.addEventListener('load', function() {
  // Set current year in footer
  if (document.getElementById('time_year')) {
    document.getElementById('time_year').textContent = new Date().getFullYear();
  }
  
  // Initialize any other components
  scroll.update();
});

