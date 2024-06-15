const navLinks = document.querySelectorAll('.first a');

const igniteSound = document.getElementById('igniteSound');

function getCorrespondingLightsaber(link) {
    const classMap = {
        'home': '.current1',
        'about': '.current2',
        'hobbies': '.current3',
        'gallery': '.current4',
        'contact': '.current5'
    };
    return document.querySelector(classMap[link.className]);
}

navLinks.forEach(link => {
    const lightsaber = getCorrespondingLightsaber(link);
    link.addEventListener('mouseenter', () => {
        if (lightsaber) {
            lightsaber.style.opacity = '1';
            igniteSound.currentTime = 0;
            igniteSound.play();
        }
    });
    link.addEventListener('mouseleave', () => {
        if (lightsaber) {
            lightsaber.style.opacity = '0';
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    var audioElement = document.getElementById('igniteSound');

    audioElement.volume = 0.15;

    var navLinks = document.querySelectorAll('nav.first ul.nav li a');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('mouseover', function() {
            audioElement.play();
        });
    });
});
    document.addEventListener("DOMContentLoaded", function() {
    const hobbiesSection = document.getElementById('hobbies');
    const paraElements = document.querySelectorAll('.para');
    const berserkElement = document.querySelector('.berserk');

    const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    hobbiesSection.classList.add('visible');
    setTimeout(() => {
    paraElements.forEach(para => para.classList.add('visible'));
    berserkElement.classList.add('visible');
}, 30);

} else {
    hobbiesSection.classList.remove('visible');
    paraElements.forEach(para => para.classList.remove('visible'));
    berserkElement.classList.remove('visible');
}
});
}, observerOptions);

    observer.observe(hobbiesSection);
});

