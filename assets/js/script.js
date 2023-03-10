const mode = document.getElementById('mode_icon');
const button = document.getElementById('login_button')

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun')

        form.classList.add('dark');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark')
});

button.addEventListener('click', (event) => {
    event.preventDefault();
})
