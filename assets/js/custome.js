$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {

            $('.navbar').removeClass("sticky");
        }
    });


    /*toggle menu script*/
    $('.menu-btn').click(function () {

        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });


    /*progressbar*/
    $('#demoprogressbar5').LineProgressbar({
        percentage: 85,
        fillBackgroundColor: '#1abc9c'
    });
    $('#demoprogressbar6').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#9b59b6'
    });
    $('#demoprogressbar7').LineProgressbar({
        percentage: 50,
        fillBackgroundColor: '#e67e22'
    });
    $('#demoprogressbar8').LineProgressbar({
        percentage: 60,
        fillBackgroundColor: '#f1c40f'
    });



    /*typing animation script*/
    var typed = new Typed(".typing", {
        strings: ["Web Desiginer", "Web Developer", "Theme Customizer","Theme Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    /*typing animation script*/
    var typed = new Typed(".typing-2", {
        strings: ["Web Desiginer", "Web Developer", "Theme Customizer","Theme Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });









    /*owl carousel*/

    $('.team-carousel').owlCarousel({
        animateOut: 'animate__fadeOutLeft',
        animateIn: 'animate__fadeInRight',
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,


            }
        }
    });




});
