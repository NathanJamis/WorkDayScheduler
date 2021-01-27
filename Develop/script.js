const m = moment();
var currentDay = document.getElementById("currentDay");
var currentTime = m.format("HH");

currentDay.textContent = m.format('LLLL');

for (i = 9; i<=17; i++) {
    var hourBlock = "#" + [i]
    var selector = $(hourBlock).attr("hourValue");

    if (selector < currentTime) {
        $(hourBlock).addClass("past");
    } if (selector === currentTime) {
        $(hourBlock).addClass("present");
    } if (selector > currentTime) {
        $(hourBlock).addClass("future");
    };
}