const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const label = toggle?.querySelector('.theme-label');
const themeColor = document.getElementById('themeColor');

function setTheme(theme, save = true) {
  root.dataset.theme = theme;
  const isDark = theme === 'dark';
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Switch to day mode' : 'Switch to night mode');
  }
  if (label) label.textContent = isDark ? 'Night' : 'Day';
  if (themeColor) themeColor.setAttribute('content', isDark ? '#10131b' : '#f5f2ea');
  if (save) localStorage.setItem('yaqoob-theme', theme);
}

const savedTheme = localStorage.getItem('yaqoob-theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme || (prefersDark ? 'dark' : 'light'), false);

toggle?.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

// Close mobile tap focus after choosing a navigation item.
document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => link.blur());
});
