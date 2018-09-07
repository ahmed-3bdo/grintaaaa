/*global $*/
$(function () {
    "use strict";

    // MixItUp
    mixitup('.portfolio')

    // Add Active Class For Ul
    $('ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.navigation li').on('click', function () {
        $('body').find(' > div').not($(this).data('class')).fadeOut(200);
        $($(this).data('class')).delay(250).fadeIn()
    });

    $('form .form-control').on('focusout', function () {
        if ($(this).val() !== '') {
            $(this).parent().addClass('label-data');
            $(this).addClass('input-data');
        } else {
            $(this).parent().removeClass('label-data');
        }
    });

});

/*$(this).addClass('active').siblings().removeClass('active'); */