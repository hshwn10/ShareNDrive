const logo = document.getElementById('logo');
let scale = 1;
let isHovered = false;

logo.addEventListener('mouseenter', () => {
    isHovered = true;
    animateLogo();
});

logo.addEventListener('mouseleave', () => {
    isHovered = false;
    logo.style.transform = `scale(1)`;
});

function animateLogo() {
    if (isHovered) {
        logo.style.transform = `scale(1.05)`;
        logo.style.transition = 'transform 0.3s ease';
    }
}

const closeBtn = document.getElementById('closeBtn');
const modalOverlay = document.getElementById('modalOverlay');

closeBtn.addEventListener('click', () => {
    modalOverlay.style.opacity = '0';
    setTimeout(() => {
        modalOverlay.style.display = 'none';
    }, 300);
});


const form = document.querySelector('.form-section');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (!emailInput.value || !phoneInput.value) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    if (!isValidEmail(emailInput.value)) {
        alert('Пожалуйста, введите корректный email');
        return;
    }

    if (!isValidPhone(phoneInput.value)) {
        alert('Пожалуйста, введите корректный номер телефона');
        return;
    }

    alert('Заявка успешно отправлена!');
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^\+?[\d\s-()]{10,}$/.test(phone);
}