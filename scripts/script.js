$(function () {
    $('a[href^="#"]').click(function () {
        elementID = $(this).attr("href");
        position = $(elementID).offset().top;
        $('html, body').animate({scrollTop: position}, 800);

        return false;
    });
});

$('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000
});


const nameRegex = /^[a-zA-Z\s]*$/;
const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/


$("#submit").click(function () {

    const nameInput = $('#name');
    const phoneInput = $('#phone');
    const emailInput = $('#email');
    let hasError = false;

    if (!nameInput.val()) {
        nameInput.css('border', "1px solid red");
        hasError = true;
        alert("Заполните поле");

    }
    if (!phoneInput.val()) {
        phoneInput.css('border', "1px solid red");
        hasError = true;
        alert("Заполните поле");
    }
    if (!emailInput.val()) {
        emailInput.css('border', "1px solid red");
        hasError = true;
        alert("Заполните поле");
    }

    if (nameInput.val() !== nameRegex){
        $('.name').show()
    }

    if (!hasError){

    }

});