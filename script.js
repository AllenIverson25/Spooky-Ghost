// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for the hero section
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('#home .hero');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .5 + 'px)';
});

// Fade-in animations on scroll
const faders = document.querySelectorAll('section');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
