// === JQuery === 
$(document).ready(function(){
    // Portfolio button scroll 
    $(".button__my-portfolio").click(function() {
        $('html,body').animate({
            scrollTop: $(".portfolio").offset().top},
            'slow');
    });

    // Add smooth scrolling to all links (a href="#some-id", section id="some-id")
    $("a[href^='#']").on('click', function() {
        const _href = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(_href).offset().top},
            'fast');
    });

    // smooth scroll and pageup button  
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) { // show pageup button after 1600px
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
    // close modal window 
    $('.modal__cross').on('click', function(e) {
        e.preventDefault();
        $('.overlay, #thanks').fadeOut("slow");
    });

    // === FORM ===
    // form validation
    $(".contact-form").validate();
    // mask phone number input
    $(".phone").mask("+48-999-999-999");
    // ajax + open modal
    $(".contact-form").submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay').fadeIn('slow'); // shows thanks modal
            $('form').trigger('reset');
        });
        return false;
    });
});

// JavaScript
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const cross = document.querySelector('.menu__close');

// === menu ===
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

cross.addEventListener('click', function() {
    menu.classList.remove('active');
});
// === menu end ===

// === additional skills bar section ===
const counters = document.querySelectorAll('.counters'),
lines = document.querySelectorAll('.other-skills__grid__item__bar span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
// === additional skills bar section end ===

new WOW().init();
