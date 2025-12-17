// Simple hamburger dropdown (teacher-friendly)
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".hamburger");
  const menu = document.querySelector(".nav-dropdown");

  if (!btn || !menu) return;

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const isOpen = menu.style.display === "block";
    menu.style.display = isOpen ? "none" : "block";
    btn.setAttribute("aria-expanded", String(!isOpen));
  });

  // Close when clicking outside
  document.addEventListener("click", function () {
    menu.style.display = "none";
    btn.setAttribute("aria-expanded", "false");
  });
});
