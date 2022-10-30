// Current day using moment API
var currentDayEl  = document.querySelector('#currentDay');
    setInterval(function() {
    currentDayEl.textContent = moment().format('dddd, MMMM Do YYYY, h:mm:ss'); // Weekday, October 31st 2022
    }, 1000); // refreshes every second (in milliseconds)

// Change background of time block depending on current hour
