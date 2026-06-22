/* =============================================
   DESERT EXPERIENCE - JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {

    // Header scroll effect
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Mobile Navigation
    const navToggle = document.querySelector('.nav-toggle') || document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu') || document.querySelector('.nav-links');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close on ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Simple hover effects for gallery items
    const galleryItems = document.querySelectorAll('.gallery-item, .gallery-item-small');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    console.log('Website loaded successfully!');
});
