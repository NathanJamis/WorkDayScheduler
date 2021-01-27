const m = moment();
var currentDay = document.getElementById("currentDay");
var currentTime = m.format("HH");

currentDay.textContent = m.format('LLLL');

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
}