document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".hamburger");
  const nav = document.getElementById("primary-nav");

  if (!btn || !nav) return;

  const mq = window.matchMedia("(max-width: 480px)");

  function openMenu() {
    btn.classList.add("is-active");
    btn.setAttribute("aria-expanded", "true");
    nav.classList.add("open");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    btn.classList.remove("is-active");
    btn.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
  }

  function toggleMenu() {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    if (expanded) closeMenu();
    else openMenu();
  }

  btn.addEventListener("click", toggleMenu);

  // Close when a nav link is clicked (mobile only)
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      if (mq.matches) closeMenu();
    });
  });

  // Ensure menu is closed when leaving mobile size
  window.addEventListener("resize", () => {
    if (!mq.matches) closeMenu();
  });
});