const menuButton = document.querySelector("[data-menu-button]");
const siteNav = document.querySelector("[data-site-nav]");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const open = siteNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  siteNav.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
}

const filterButtons = [...document.querySelectorAll("[data-motor-filter]")];
const motorCards = [...document.querySelectorAll("[data-motor-family]")];

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    const selected = button.dataset.motorFilter;

    for (const item of filterButtons) {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    }

    for (const card of motorCards) {
      card.hidden = selected !== "all" && card.dataset.motorFamily !== selected;
    }
  });
}
