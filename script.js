const toggle = document.getElementById("theme-toggle")
const body = document.body

const saved = localStorage.getItem("theme")
const prefersDark = window.matchMedia("(prefers-color-schemes: dark").matches
const isDark = saved ? saved === "dark" : prefersDark

function applyTheme(dark) {
    body.classList.toggle('dark', dark)
    toggle.checked = dark;
    localStorage.setItem('theme', dark ? "dark" : "light")
}

applyTheme(isDark)

toggle.addEventListener('change', () => applyTheme(toggle.checked))