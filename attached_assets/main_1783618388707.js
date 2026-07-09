// Lulubug's Garden — shared site behavior
// Mobile nav toggle, newsletter popup, and lightweight form handling.
// No external dependencies — safe to drop into Replit or a WordPress
// child-theme's footer.js enqueue.

document.addEventListener('DOMContentLoaded', function () {

  /* ---------------- Mobile nav ---------------- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var isOpen = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  /* ---------------- Newsletter popup ----------------
     Shows once per visitor (localStorage-gated) after a short delay
     on any page that includes the popup markup (#newsletter-popup).
     Editorial copy lives in the HTML — this file only controls timing
     and dismissal so non-developers can edit the wording safely. */
  var popup = document.getElementById('newsletter-popup');
  if (popup) {
    var STORAGE_KEY = 'lulubug_popup_dismissed';
    var alreadyShown = false;
    try { alreadyShown = window.localStorage.getItem(STORAGE_KEY) === '1'; } catch (e) { /* storage blocked, always show */ }

    if (!alreadyShown) {
      setTimeout(function () {
        popup.classList.add('open');
      }, 8000); // 8s delay — adjust as desired
    }

    var dismiss = function () {
      popup.classList.remove('open');
      try { window.localStorage.setItem(STORAGE_KEY, '1'); } catch (e) { /* no-op */ }
    };

    popup.querySelectorAll('[data-popup-close]').forEach(function (btn) {
      btn.addEventListener('click', dismiss);
    });
    popup.addEventListener('click', function (e) {
      if (e.target === popup) dismiss();
    });

    var popupForm = popup.querySelector('form');
    if (popupForm) {
      popupForm.addEventListener('submit', function () {
        // Let the form's own action/provider (Mailchimp, Klaviyo, WP plugin,
        // etc.) handle the actual submission. We just remember the user
        // dismissed the popup so it doesn't reappear on next page.
        try { window.localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
      });
    }
  }

  /* ---------------- Generic contact/join forms ----------------
     These forms are wired with plain HTML `action`/`method` attributes
     so they work as-is once pointed at a real endpoint (Formspree,
     WPForms, Contact Form 7, etc.). This script only adds a friendly
     "Sending..." state; it does not intercept submission. */
  document.querySelectorAll('form[data-loading-label]').forEach(function (form) {
    form.addEventListener('submit', function () {
      var btn = form.querySelector('button[type="submit"], input[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = form.getAttribute('data-loading-label');
      }
    });
  });

});
