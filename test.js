$(document).ready(function(){

    $('.party-parrots').hide();

    $('.party-time').click(function(){
        $('.party-parrots').show();
    });
    
    $('.ASCII').hide();
    $('.neofetch').hide();
    $('.neofetch-desktop').hide();
    $('.neofetch-laptop').hide();
    $('.hard_skills').hide();
    $('.soft_skills').hide();
    $('.social-links').hide();
    $('.copyright').hide();
    $('.command-line-bottom').hide();

    
    $('.date').html('Last login: ' + new Date().toString().substr(0, 24));

    printCommand();

    $('.ASCII-button').on('click', function() {
        $('html, body').animate({
            scrollTop: $(".ASCII").offset().top
        }, 'fast');
    });
    $('.neofetch-desktop-button').on('click', function() {
        $('html, body').animate({
            scrollTop: $(".neofetch-desktop").offset().top
        }, 'fast');
    });
    $('.neofetch-laptop-button').on('click', function() {
        $('html, body').animate({
            scrollTop: $(".neofetch-laptop").offset().top
        }, 'fast');
    });
    $('.hard_skills-button').on('click', function() {
        $('html, body').animate({
            scrollTop: $(".hard_skills").offset().top
        }, 'fast');
    });
    $('.soft_skills-button').on('click', function() {
        $('html, body').animate({
            scrollTop: $(".soft_skills").offset().top
        }, 'fast');
    });
    $('.contact-button').on('click', function() {
        $('html, body').animate({
            scrollTop: $(".social-links").offset().top
        }, 'fast');
    });

    setTimeout(function() {
        alert("Professional inquiries will receive my actual resume.");
    }, 28000);
 });




 function printCommand() {
    setTimeout(function() {
        $('.command').html('n');
    }, 600);
    setTimeout(function() {
        $('.command').html('ne');
    }, 800);
    setTimeout(function() {
        $('.command').html('neo');
    }, 1000);
    setTimeout(function() {
        $('.command').html('neof');
    }, 1200);
    setTimeout(function() {
        $('.command').html('neofe');
    }, 1500);
    setTimeout(function() {
        $('.command').html('neofet');
    }, 1700);
    setTimeout(function() {
        $('.command').html('neofetc');
    }, 1900);
    setTimeout(function() {
        $('.command').html('neofetch');
    }, 2000);
   
    setTimeout(function() {
        $('.parameters').html('r');
    }, 2200);
    setTimeout(function() {
        $('.parameters').html('re');
    }, 2300);
    setTimeout(function() {
        $('.parameters').html('rei');
    }, 2500);
    setTimeout(function() {
        $('.parameters').html('rein');
    }, 2700);
    setTimeout(function() {
        $('.parameters').html('reine');
    }, 2900);
    setTimeout(function() {
        $('.parameters').html('reinek');
    }, 3100);
    setTimeout(function() {
        $('.parameters').html('reineke');
    }, 3300);

    setTimeout(function() {
        $('.command').css('margin-bottom', '2.5em');
    }, 3800);

    setTimeout(function() {
        $('.ASCII').toggle();
    }, 3800);

    setTimeout(function() {
        $('.neofetch').toggle();
        $('html, body').animate({
            scrollTop: $(".neofetch").offset().top
        }, 'fast');
    }, 6000);

    setTimeout(function() {
        $('.neofetch-desktop').toggle();
        $('html, body').animate({
            scrollTop: $(".neofetch-desktop").offset().top
        }, 'fast');
    }, 9000);

    setTimeout(function() {
        $('.neofetch-laptop').toggle();
        $('html, body').animate({
            scrollTop: $(".neofetch-laptop").offset().top
        }, 'fast');
    }, 12000);

    setTimeout(function() {
        $('.hard_skills').toggle();
        $('html, body').animate({
            scrollTop: $(".hard_skills").offset().top
        }, 'fast');
    }, 15000);

    setTimeout(function() {
        $('.soft_skills').toggle();
        $('html, body').animate({
            scrollTop: $(".soft_skills").offset().top
        }, 'fast');
    }, 18000);

    setTimeout(function() {
        $('.social-links').toggle();
        $('html, body').animate({
            scrollTop: $(".social-links").offset().top
        }, 'fast');
    }, 21000);

    setTimeout(function() {
        $('.command-line-bottom').toggle();
    }, 24000);

    setTimeout(function() {
        $('.copyright').toggle();
    }, 28000);

 }