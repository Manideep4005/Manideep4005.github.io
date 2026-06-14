/**
 * Manideep Nakka Portfolio JavaScript
 * Premium SaaS-style interactions and integrations.
 */

// ==========================================================================
// EMAILJS CONFIGURATION
// To enable form submissions, replace these placeholder values with your credentials:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an Email Service and get the Service ID
// 3. Create an Email Template and get the Template ID
// 4. Go to Account > API Keys and get the Public Key
// ==========================================================================
const EMAILJS_PUBLIC_KEY = 'QKWIPHwLEo3d_q_MR';   // Replace with your Public Key
const EMAILJS_SERVICE_ID = 'service_zfnir1m';   // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'template_bccm26b'; // Replace with your Template ID

// Initialize EmailJS if key is provided and not default placeholder
(function () {
  if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // ==========================================================================
  // MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const mobileToggle = document.getElementById('sidebar_open_btn');
  const sidebarClose = document.getElementById('sidebar_close_btn');
  const mobileSidebar = document.getElementById('mobile_sidebar');
  const navOverlay = document.getElementById('nav_overlay');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  function openSidebar() {
    mobileSidebar.classList.add('active');
    navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Disable background scroll
  }

  function closeSidebar() {
    mobileSidebar.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openSidebar);
  if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
  if (navOverlay) navOverlay.addEventListener('click', closeSidebar);

  // Close sidebar on link click
  sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
  });

  // Close sidebar on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });

  // ==========================================================================
  // SCROLL EFFECTS (STICKY NAVBAR & SCROLL TO TOP)
  // ==========================================================================
  const navbar = document.querySelector('.navbar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    // Navbar background blur/opacity trigger
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll to Top visibility trigger
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  // Scroll to Top action
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================================================
  // ACTIVE NAV LINK HIGHLIGHTING ON SCROLL
  // ==========================================================================
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // Trigger when section occupies center
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach(section => {
    navObserver.observe(section);
  });

  // ==========================================================================
  // SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserverOptions = {
    root: null,
    threshold: 0.15, // Trigger when 15% of element is in view
    rootMargin: '0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target); // Stop observing after anim triggers
      }
    });
  }, revealObserverOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // ==========================================================================
  // TOAST NOTIFICATIONS
  // ==========================================================================
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message, type = 'success') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'error' : ''}`;

    // Choose appropriate Lucide icon depending on type
    const iconName = type === 'success' ? 'check-circle' : 'alert-circle';
    const iconColorClass = type === 'success' ? 'success' : 'error';

    toast.innerHTML = `
      <i data-lucide="${iconName}" class="toast-icon ${iconColorClass}"></i>
      <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Recreate Lucide Icons to render new toast icon
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    // Auto-remove toast after 4 seconds
    setTimeout(() => {
      toast.style.animation = 'toast-in 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) reverse forwards';
      toast.addEventListener('animationend', () => {
        toast.remove();
      });
    }, 4000);
  }

  // ==========================================================================
  // CONTACT FORM SUBMISSION WITH EMAILJS
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnIcon = document.getElementById('btnIcon');
  const btnSpinner = document.getElementById('btnSpinner');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      // Collect inputs
      const userName = document.getElementById('userName').value.trim();
      const userEmail = document.getElementById('userEmail').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!userName || !userEmail || !message) {
        showToast('Please fill out all fields.', 'error');
        return;
      }

      // Check if placeholders are not replaced
      if (
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY' ||
        EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID'
      ) {
        showToast('Please configure EmailJS credentials in js/script.js.', 'error');
        return;
      }

      // Set Loading State
      submitBtn.disabled = true;
      btnSpinner.style.display = 'inline-block';
      if (btnIcon) btnIcon.style.display = 'none';
      const submitText = submitBtn.querySelector('span');
      const originalText = submitText.textContent;
      submitText.textContent = 'Sending...';

      // Send via EmailJS
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        user_name: userName,
        user_email: userEmail,
        message: message,
      })
        .then(() => {
          showToast('Message sent successfully! I will reply soon.');
          contactForm.reset();
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          showToast('Failed to send email. Please try again later.', 'error');
        })
        .finally(() => {
          // Reset Loading State
          submitBtn.disabled = false;
          btnSpinner.style.display = 'none';
          if (btnIcon) btnIcon.style.display = 'inline-block';
          submitText.textContent = originalText;
        });
    });
  }
});
