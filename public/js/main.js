
'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Navigation
    --------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Countdown
    --------------------*/
    // Set the event date and time (in UTC) for February 22, 2024
    const eventDate = new Date('2024-02-22T00:00:00Z').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeDifference = eventDate - now;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById('days').innerHTML = days;
            document.getElementById('hours').innerHTML = padZero(hours);
            document.getElementById('minutes').innerHTML = padZero(minutes);
            document.getElementById('seconds').innerHTML = padZero(seconds);
        } else {
            if (document.getElementById('countdown')) {
                document.getElementById('countdown').innerHTML = "Event Ended";
            }
        }
    }

    function padZero(number) {
        return (number < 10) ? `0${number}` : number;
    }


    document.addEventListener('DOMContentLoaded', function () {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });
})(jQuery);