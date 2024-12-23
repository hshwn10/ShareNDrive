document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('contactPopup');
    const closeButton = document.getElementById('closeButton');
    const phoneIcon = document.getElementById('phoneIcon');

    closeButton.addEventListener('click', () => {
        popup.style.opacity = '0';
        popup.style.transform = 'translate(-50%, -48%)';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    });

    let animationInterval;
    
    const startAnimation = () => {
        phoneIcon.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            phoneIcon.style.animation = '';
        }, 500);
    };

    animationInterval = setInterval(startAnimation, 1500);

    phoneIcon.addEventListener('mouseenter', () => {
        clearInterval(animationInterval);
        phoneIcon.style.animation = '';
    });

    phoneIcon.addEventListener('mouseleave', () => {
        animationInterval = setInterval(startAnimation, 500);
    });
});