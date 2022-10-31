// Current day using moment API
var currentDayEl  = document.querySelector('#currentDay');
    setInterval(function() {
    currentDayEl.textContent = moment().format('dddd, MMMM Do YYYY, h:mm:ss'); // Weekday, October 31st 2022
    }, 1000); // refreshes every second (in milliseconds)


$(document).ready(function(){ //Ensures function is only available after page is loaded

$('.saveBtn').on('click', function() {
    //do something on click
    //Saves user input to local storage (setItem)

    //Display local storage data on page (getItem)

    //Notification appears: "Saved to LocalStorage"
    $('.notification').addClass('show');

    //Notification disappears after 5 secs
    setTimeout (function() {
        $('.notification').removeClass('show');
    }, 5000);
});
}) 


//Get current time of day
var now = moment().format('hh');
var nowNum = parseInt (now, 10); // for good measure, turns string into number
console.log(nowNum);

//Function which changes color at specific time of day
function blahBlah() {

    //do something here

}

//Extract number from id
var text = $("#hour-14").text(); 
var number = parseInt (text, 10);
console.log(number);

// $('.time-block').each(function () {
//     var blockHour = parseInt($(this).attr('id').split('-')[1]);

//if time block = now, then apply red background color
if (number === nowNum) {
    $(".time-block").addClass('present');
}

//If time block < now, then apply gray background color
// .past

// //if time block = now, then apply red background color
// if .present

// //if time block > now, then apply green background color
// .future

//Call function
blahBlah();
