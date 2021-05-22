//Display current date
var day = moment().format('dddd, MMMM Do');
$('#currentDay').append(day);


// WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future
//Get current time in 24 hour clock
var currentTime = moment().format('HH:mm');
console.log(currentTime);

//Determine if each time block is in the past, present or future
var startTime = [9, 10, 11 ,12, 13, 14, 15, 16, 17];

$.each(startTime, function(i, value) {
    timeInitial = startTime[i]++;
    timeFinal = startTime[i]--;

    console.log(i, value);
    console.log(timeInitial);
    console.log(timeFinal);
});


//Check current time every minute




// WHEN I click into a time block THEN I can enter an event
// WHEN I click the save button for that time block THEN the text for that event is saved in local storage
// WHEN I refresh the page THEN the saved events persist
// Can edit saved events