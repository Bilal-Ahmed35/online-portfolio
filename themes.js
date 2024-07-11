document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    document.querySelector('header').classList.toggle('dark-theme');
    document.querySelector('header').classList.toggle('light-theme');
}
