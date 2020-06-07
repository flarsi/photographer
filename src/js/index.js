import $ from "jquery"
import "slick-carousel"

$(document).ready(function () {

    $("#slider").slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    })

    let offset = $("#navbar").offset().top
    $(window).on("scroll", function () {

        if(window.pageYOffset >= offset){

            $("#navbar").addClass("sticky")
            $("#navbar").css("border-radius", "0 0 15px 15px")
        }else {

            $("#navbar").removeClass("sticky")
            $("#navbar").css("border-radius", "15px")
        }
    })

    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
    })
})