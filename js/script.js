const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const themeButton = document.querySelector(".theme-toggle");

if (menuButton && siteNav) {
  const setMenuOpen = (isOpen) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    siteNav.classList.toggle("is-open", isOpen);
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) setMenuOpen(false);
  });
}

if (themeButton) {
  const root = document.documentElement;
  themeButton.addEventListener("click", () => {
    const isLight = root.dataset.theme !== "light";
    if (isLight) root.dataset.theme = "light";
    else delete root.dataset.theme;
    themeButton.setAttribute("aria-pressed", String(isLight));
  });
}
