const m = moment();
var currentDay = document.getElementById("currentDay");
var currentTime = m.format("HH");

currentDay.textContent = m.format('LLLL');

$(document).ready(function() {
    $(".btn").on("click", function() {
        var key = $(this).parent().attr("id");
        var value = $(this).siblings(".event").val();
        localStorage.setItem(key, value);
    });
});

for (i = 9; i<=17; i++) {
    var selector = "#" + [i]
    var hourBlock = $(selector).attr("hourValue");

    if (hourBlock < currentTime) {
        $(selector).addClass("past");
    } if (hourBlock === currentTime) {
        $(selector).addClass("present");
    } if (hourBlock > currentTime) {
        $(selector).addClass("future");
    };
};

$("#hour-9 .event").val(localStorage.getItem("hour-9"));
$("#hour-10 .event").val(localStorage.getItem("hour-10"));
$("#hour-11 .event").val(localStorage.getItem("hour-11"));
$("#hour-12 .event").val(localStorage.getItem("hour-12"));
$("#hour-13 .event").val(localStorage.getItem("hour-13"));
$("#hour-14 .event").val(localStorage.getItem("hour-14"));
$("#hour-15 .event").val(localStorage.getItem("hour-15"));
$("#hour-16 .event").val(localStorage.getItem("hour-16"));
$("#hour-17 .event").val(localStorage.getItem("hour-17"));