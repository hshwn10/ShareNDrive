document.querySelectorAll('.details-button').forEach(button => {
    button.addEventListener('click', function() {
        const carTitle = this.parentElement.querySelector('.car-title').textContent;
        console.log(`Showing details for ${carTitle}`);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const brandsContainer = document.querySelector('.brands-container');
    const nextButton = document.querySelector('.next-button');
    
    if (nextButton && brandsContainer) {
        nextButton.addEventListener('click', function() {
            brandsContainer.scrollBy({
                left: 300 + 20,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    ymaps.ready(initMap);

    function initMap() {
        const map = new ymaps.Map('map', {
            center: [55.749, 37.597],
            zoom: 15,
            controls: ['zoomControl']
        });

        const marker = new ymaps.Placemark([55.749, 37.597], {
            hintContent: 'ShareNDrive',
            balloonContent: 'Наш салон ShareNDrive'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'marker-icon.png',
            iconImageSize: [32, 32],
            iconImageOffset: [-16, -32]
        });

        map.geoObjects.add(marker);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.footer .nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href === '/') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                window.location.href = href;
            }
        });
    });

    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});