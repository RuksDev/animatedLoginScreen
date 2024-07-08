const conatainer =document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
registerBtn.addEventListener('click', () => {
    conatainer.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    conatainer.classList.remove("active");
});

