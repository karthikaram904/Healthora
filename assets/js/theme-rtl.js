document.addEventListener("DOMContentLoaded", function () {

  const html = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const rtlToggle = document.getElementById("rtlToggle");

  /* ===== Load saved settings ===== */
  const savedTheme = localStorage.getItem("theme");
  const savedDir = localStorage.getItem("direction");

  if (savedTheme === "dark") {
    html.setAttribute("data-theme", "dark");
    if (themeToggle) themeToggle.textContent = "☀️";
  }

  if (savedDir === "rtl") {
    html.setAttribute("dir", "rtl");
  }

  /* ===== Theme toggle ===== */
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = html.getAttribute("data-theme") === "dark";

      if (isDark) {
        html.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
      } else {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
      }
    });
  }

  /* ===== RTL toggle ===== */
  if (rtlToggle) {
    rtlToggle.addEventListener("click", () => {
      const isRTL = html.getAttribute("dir") === "rtl";

      if (isRTL) {
        html.setAttribute("dir", "ltr");
        localStorage.setItem("direction", "ltr");
      } else {
        html.setAttribute("dir", "rtl");
        localStorage.setItem("direction", "rtl");
      }
    });
  }

});
// document.addEventListener("DOMContentLoaded", function () {
//   const currentPage = window.location.pathname.split("/").pop() || "index.html";

//   // Reset all active states
//   document.querySelectorAll(".nav-link, .dropdown-item").forEach(el => {
//     el.classList.remove("active");
//   });

//   // Handle normal nav links (About, Property, Contact)
//   document.querySelectorAll(".navbar .nav-link").forEach(link => {
//     const href = link.getAttribute("href");

//     // Ignore empty or #
//     if (!href || href === "#") return;

//     if (href === currentPage) {
//       link.classList.add("active");
//     }
//   });

//   // Handle dropdown items (Home 1, Home 2)
//   document.querySelectorAll(".dropdown-item").forEach(item => {
//     const href = item.getAttribute("href");

//     if (href === currentPage) {
//       item.classList.add("active");

//       // Activate dropdown parent ONLY if child matches
//       const dropdown = item.closest(".nav-item.dropdown");
//       if (dropdown) {
//         dropdown.querySelector(".nav-link").classList.add("active");
//       }
//     }
//   });
// });

  // Desktop dropdown
  const homeBtn = document.getElementById("homeDropdownBtn");
  const homeMenu = document.getElementById("homeDropdown");
  const homeArrow = document.getElementById("homeArrow");

  homeBtn.addEventListener("click", () => {
    homeMenu.classList.toggle("hidden");
    homeArrow.classList.toggle("rotate-180");
  });

  // Mobile menu toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Mobile dropdown
  const mobileHomeBtn = document.getElementById("mobileHomeBtn");
  const mobileHomeDropdown = document.getElementById("mobileHomeDropdown");

  mobileHomeBtn.addEventListener("click", () => {
    mobileHomeDropdown.classList.toggle("hidden");
  });

