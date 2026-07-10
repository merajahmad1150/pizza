(function () {
  "use strict";

  /* Mobile nav toggle */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Scroll reveal */
  var revealTargets = document.querySelectorAll(
    ".pizza-card, .testimonial-card, .story-copy, .story-art, .hero-copy"
  );
  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Ambient embers */
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  var field = document.getElementById("emberField");
  if (field && !prefersReducedMotion) {
    var count = window.innerWidth < 720 ? 10 : 20;
    for (var i = 0; i < count; i++) {
      var ember = document.createElement("span");
      ember.className = "ember";
      ember.style.left = Math.random() * 100 + "vw";
      ember.style.setProperty("--drift", Math.random() * 60 - 30 + "px");
      ember.style.animationDuration = 6 + Math.random() * 8 + "s";
      ember.style.animationDelay = Math.random() * 10 + "s";
      field.appendChild(ember);
    }
  }

  /* Order form (client-side only — wire to a real backend before launch) */
  var form = document.getElementById("orderForm");
  var status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements["name"].value.trim();
      var email = form.elements["email"].value.trim();

      if (!name || !email) {
        status.textContent = "Please add your name and email so we can confirm.";
        status.classList.add("error");
        return;
      }

      status.classList.remove("error");
      status.textContent =
        "Thanks, " + name.split(" ")[0] + " — we'll confirm your order by email shortly.";
      form.reset();

      /*
        This form is currently front-end only. To receive real orders,
        connect it to a form backend (e.g. Formspree, Netlify Forms,
        or your own endpoint) and POST the form data there instead.
      */
    });
  }
})();
