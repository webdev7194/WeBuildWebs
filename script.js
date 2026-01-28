const themeBtn = document.getElementById("themeBtn");
const yearEl = document.getElementById("year");

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const pageLoader = document.getElementById("pageLoader");

if (pageLoader) {
  document.body.classList.add("loading");
  document.body.style.overflow = "hidden";

  window.addEventListener("load", () => {
    pageLoader.classList.add("hide");
    document.body.classList.remove("loading");
    document.body.style.overflow = "";
    setTimeout(() => pageLoader.remove(), 450);
  });
}
yearEl.textContent = new Date().getFullYear();

function setTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
    themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    document.body.classList.remove("light");
    themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
  localStorage.setItem("webuildweb_theme", theme);
}

setTheme(localStorage.getItem("webuildweb_theme") || "dark");

themeBtn.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
});

function openSidebar() {
  sidebar.classList.add("open");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeSidebarMenu() {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

menuBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebarMenu);
overlay.addEventListener("click", closeSidebarMenu);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSidebarMenu();
});