document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function() {
        window.open(this.dataset.url, '_blank');
    });
});

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
