document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Active Navigation on Scroll
    window.addEventListener('scroll', function() {
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('.navbar-nav li a');
        
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 100;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('navactive');
                    document.querySelector('.navbar-nav li a[href*=' + id + ']').classList.add('navactive');
                });
            }
        });
    });

    // Carousel Controls
    let carousel = document.querySelector('.carousel');
    if (carousel) {
        let indicators = document.querySelectorAll('.carousel-indicators li');
        let slides = document.querySelectorAll('.carousel-inner .item');
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                slides.forEach(slide => slide.classList.remove('active'));
                indicators.forEach(ind => ind.classList.remove('active'));
                slides[index].classList.add('active');
                indicator.classList.add('active');
            });
        });
    }

    // Form Validation and Submission Handling
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission
            
            let valid = true;
            form.querySelectorAll('input[required]').forEach(input => {
                if (!input.value) {
                    valid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            if (!valid) {
                alert('Please fill in all required fields.');
            } else {
                // Show success message
                let successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                alert("Successfully Submitted");
                successMessage.textContent = 'Form successfully submitted!';
                form.appendChild(successMessage);

                // Optionally, clear the form fields
                form.reset();

                // Automatically remove the success message after a few seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
    });
});
