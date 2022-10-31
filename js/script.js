// Current day using moment API
var currentDayEl  = document.querySelector('#currentDay');
    setInterval(function() {
    currentDayEl.textContent = moment().format('dddd, MMMM Do YYYY'); // Weekday, October 31st 2022
    }, 1000); // refreshes every second (in milliseconds)


$(document).ready(function() { //Ensures function is only available after page is loaded

$('.saveBtn').on('click', function() {

    var value = $(this).siblings('.description').val(); //value is entered by user
    var time = $(this).parent().attr('id'); //key is corresponding hour block
    
    //Saves user input to local storage (setItem)
    localStorage.setItem(time, value);
   
    //Notification appears: "Saved to LocalStorage"
    $('.notification').addClass('show');

    //Notification disappears after 5 secs
    setTimeout (function() {
        $('.notification').removeClass('show');
    }, 5000);

});

//Display local storage data on page (getItem)
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
//Get current time of day
var now = moment().format('hh');
var nowNum = parseInt (now, 10); // for good measure, turns string into number
console.log(nowNum);

//Function which changes color at specific time of day
function updateClr() {

    //Extract number from id
    $('.time-block').each(function() {
    var activityHour = parseInt($(this).attr('id').split('-')[1]);
    console.log(activityHour);

    if (activityHour < nowNum) {
        $(this).addClass('past');
      } else if (activityHour === nowNum) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
};

//Call function
updateClr();

//periodically checks if time needs to be updated
    var interval = setInterval(updateClr, 15000);

});