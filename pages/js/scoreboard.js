let slideIndex = 1;


function plusSlides(n) {
    showSlides(slideIndex += n);
    displaytext(slideIndex);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

$(function () {
    var eid = GetURLParameter('eventid');

    if (eid == undefined || eid == 0) {
        displaytext(1);
    } else {
        displaytext(eid);
    }
    showSlides(slideIndex);

});
function displaytext(eventid) {


    var eventname = "";
    if (eventid == 1) {
        eventname = "Barangay Musikahan";
    } else if (eventid == 2) {
        eventname = "Musikahan Himig Handog";
    } else if (eventid == 3) {
        eventname = "Musikahan Music Video";
    } else if (eventid == 4) {
        eventname = "Musikahan Pasiklaband";
    } else if (eventid == 5) {
        eventname = "Musikahan Poerty & Motion";
    }
    $('.badge-event').html(eventname + " 2023");
    $('.span-event').html(eventname);



}
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
};