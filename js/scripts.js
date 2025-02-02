(function($) {

    // Show current year
    $("#current-year").text(new Date().getFullYear());

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

    // Social Media Links Data
    const socialLinks = [
        {
          platform: 'GitHub',
          link: 'https://github.com/GustavHansen99',
          iconClass: 'fab fa-github'
        },
        {
          platform: 'LinkedIn',
          link: 'https://linkedin.com/in/gustav-l-k-hansen-0b175316a',
          iconClass: 'fab fa-linkedin'
        },
        {
          platform: 'Twitter/X',
          link: 'https://x.com/TheGustavHansen',
          iconClass: 'fab fa-twitter'
        },
        {
            platform: 'Mail',
            link: 'mailto:gustav5hansen5@gmail.com',
            iconClass: 'fas fa-envelope'
        }
      ];
  
      // Function to append social media icons to the lead section
      function appendSocialMediaIcons() {
        const container = $('#social-media-icons');
        let socialMediaHtml = '<div class="social-icons">';
  
        socialLinks.forEach(link => {
          socialMediaHtml += `
            <a href="${link.link}" target="_blank" class="social-icon">
              <i class="${link.iconClass}"></i>
            </a>
          `;
        });
  
        socialMediaHtml += '</div>';
        container.html(socialMediaHtml);
      }
  
      // Call the function to append the social media icons
      appendSocialMediaIcons();

    // Timeline animation function
    function animateTimeline() {
        const timelinePoints = document.querySelectorAll('.vtimeline-point');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, {
            threshold: 0.2, // 20% of the element must be visible
            rootMargin: '0px 0px -50px 0px' // Slightly offset trigger point
        });

        timelinePoints.forEach(point => {
            observer.observe(point);
        });
    }

    // Initialize animations when document is ready
    $(document).ready(function() {
        animateTimeline();
        
        // Re-run animation check on scroll (for dynamic content)
        $(window).on('scroll', function() {
            requestAnimationFrame(animateTimeline);
        });
        initProjectCarousel();
    });

    // Project carousel navigation
    function initProjectCarousel() {
        const wrapper = document.querySelector('.projects-wrapper');
        const prevBtn = document.querySelector('.nav-arrow.prev');
        const nextBtn = document.querySelector('.nav-arrow.next');
        const scrollAmount = 370; // card width + gap

        if (wrapper && prevBtn && nextBtn) {
            // Hide prev button initially
            prevBtn.style.opacity = '0';
            prevBtn.style.pointerEvents = 'none';

            // Update arrow visibility
            const updateArrows = () => {
                const isAtStart = wrapper.scrollLeft === 0;
                const isAtEnd = wrapper.scrollLeft >= (wrapper.scrollWidth - wrapper.clientWidth - 10);
                
                prevBtn.style.opacity = isAtStart ? '0' : '1';
                prevBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';
                
                nextBtn.style.opacity = isAtEnd ? '0' : '1';
                nextBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
            };

            // Scroll handlers
            prevBtn.addEventListener('click', () => {
                wrapper.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });

            nextBtn.addEventListener('click', () => {
                wrapper.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });

            // Update arrows on scroll
            wrapper.addEventListener('scroll', updateArrows);
            
            // Initial arrow check
            updateArrows();
        }
    }

})(jQuery);
