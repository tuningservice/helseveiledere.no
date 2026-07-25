"use strict";

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");
const yearElements = document.querySelectorAll("[data-current-year]");
const contactForm = document.querySelector("#contact-form");

yearElements.forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

if (header) {
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if (menuButton && menu) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.querySelector(".sr-only").textContent = "Åpne meny";
    menu.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.querySelector(".sr-only").textContent = isOpen ? "Åpne meny" : "Lukk meny";
    menu.classList.toggle("is-open", !isOpen);
  });

  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
      menuButton.focus();
    }
  });

  window.matchMedia("(min-width: 68rem)").addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
}

if (contactForm) {
  window.formspree =
    window.formspree ||
    function () {
      (window.formspree.q = window.formspree.q || []).push(arguments);
    };

  window.formspree("initForm", {
    formElement: "#contact-form",
    formId: "xeeyprpa"
  });
}
