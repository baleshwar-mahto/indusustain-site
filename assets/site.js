(function () {
    const nav = document.querySelector("header nav");
    const toggle = document.querySelector(".nav-toggle");
    const yearSpan = document.getElementById("year");
  
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    // Mobile nav toggle
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
      });
  
      nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          if (nav.classList.contains("open")) {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
          }
        });
      });
    }
  
    // Scroll reveal animations (similar feel to modern animated landing pages)
    const revealEls = document.querySelectorAll(".reveal");
    if (revealEls.length && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.18 }
      );
      revealEls.forEach((el) => observer.observe(el));
    } else {
      // Fallback: show everything
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }
  })();