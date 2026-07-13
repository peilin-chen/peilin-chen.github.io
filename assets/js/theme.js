(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const menu = document.getElementById("theme-menu");
  const icon = document.getElementById("theme-icon");

  if (!toggle || !menu || !icon) {
    return;
  }

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    const activeTheme = theme === "auto" ? getSystemTheme() : theme;

    root.classList.toggle("dark-mode", activeTheme === "dark");

    if (activeTheme === "dark") {
      icon.textContent = "☀";
    } else {
      icon.textContent = "☾";
    }
  }

  const savedTheme = localStorage.getItem("theme") || "auto";
  applyTheme(savedTheme);

  toggle.addEventListener("click", function (event) {
    event.stopPropagation();
    menu.classList.toggle("show");
  });

  menu.querySelectorAll("[data-theme]").forEach(function (button) {
    button.addEventListener("click", function () {
      const theme = button.dataset.theme;

      localStorage.setItem("theme", theme);
      applyTheme(theme);
      menu.classList.remove("show");
    });
  });

  document.addEventListener("click", function () {
    menu.classList.remove("show");
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function () {
      if ((localStorage.getItem("theme") || "auto") === "auto") {
        applyTheme("auto");
      }
    });
})();
