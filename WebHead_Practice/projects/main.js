const toggleButton = document.querySelector('.navbar_toggleButton');
const menu = document.querySelector('.navbar_menu');
const sns = document.querySelector('.navbar_sns');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    sns.classList.toggle('active');
});
