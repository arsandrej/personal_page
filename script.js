document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.first a');
    const igniteSound = document.getElementById('igniteSound');

    function getCorrespondingLightsaber(link) {
        const classMap = {
            'home': '.current1',
            'about': '.current2',
            'hobbies': '.current3',
            'games': '.current4',
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

    const sectionObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    function createSectionObserver(sectionId, elementsSelector) {
        const section = document.getElementById(sectionId);
        const elements = document.querySelectorAll(elementsSelector);

        if (!section) {
            console.error(`Section with ID ${sectionId} not found`);
            return;
        }

        if (elements.length === 0) {
            console.error(`No elements found with selector ${elementsSelector} in section ${sectionId}`);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(`Section ${sectionId} is intersecting`);
                    section.classList.add('visible');
                    setTimeout(() => {
                        elements.forEach(element => element.classList.add('visible'));
                    }, 30);
                } else {
                    console.log(`Section ${sectionId} is not intersecting`);
                    section.classList.remove('visible');
                    elements.forEach(element => element.classList.remove('visible'));
                }
            });
        }, sectionObserverOptions);

        observer.observe(section);
    }

    createSectionObserver('hobbies', '#hobbies .para, #hobbies .berserk');
    createSectionObserver('games', '#games > div');
    createSectionObserver('contact', '#contact .contacts > div');
});
