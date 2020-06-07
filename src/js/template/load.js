import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.css';
import '@css/style';
import header from "@htmlTemplate/header";
import footer from "@htmlTemplate/footer";

$('.header').append(header).find('#menu').animate({height: [ "toggle", "swing" ]}, 0)

$('.header').hover(function () {
    $(this).find('#menu').animate({
        height: [ "toggle", "swing" ],
    })
}, function () {
    $(this).find('#menu').animate({
        height: [ "toggle", "swing" ],
    })
})

$(".footer").append(footer)