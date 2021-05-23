//Display current date
var day = moment().format('dddd, MMMM Do');
$('#currentDay').append(day);

//Get current time in 24 hour clock
var moment = moment().startOf('hour');
var currentTime = moment.format('HH:mm');

//Determine if each time block is in the past, present or future
var startTime = ["09:00", "10:00", "11:00" ,"12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
var idTime = ["#nine", "#ten", "#eleven", "#twelve", "#thirteen", "#fourteen", "#fifteen", "#sixteen", "#seventeen"];
//Associate the current time with a time string in the start time array
var currentTimeIndex = startTime.indexOf(currentTime);


$.each(startTime, function(i) {
    //Present
    if (i === currentTimeIndex) {
        $(idTime[i]).removeClass('past future').addClass('present');
    }
    //Future
    else if (i > currentTimeIndex) {
        $(idTime[i]).removeClass('past present').addClass('future');
    }
    //Past
    else if (i < currentTimeIndex) {
        $(idTime[i]).removeClass('present future').addClass('past');
    }
});

//Refresh page every 5 minutes
$(document).ready(function() {
    setInterval(function() {
        window.location.reload();
    }, 5 * 60 * 1000);
});

//Save buttons to save textarea content to local storage
$("#btnNine").click(function() {
    var task = $("#nine").val();
    localStorage.setItem("#nine", JSON.stringify(task));
});
$("#btnTen").click(function() {
    var task = $("#ten").val();
    localStorage.setItem("#ten", JSON.stringify(task));
});
$("#btnEleven").click(function() {
    var task = $("#eleven").val();
    localStorage.setItem("#eleven", JSON.stringify(task));
});
$("#btnTwelve").click(function() {
    var task = $("#twelve").val();
    localStorage.setItem("#twelve", JSON.stringify(task));
});
$("#btnThirteen").click(function() {
    var task = $("#thirteen").val();
    localStorage.setItem("#thirteen", JSON.stringify(task));
});
$("#btnFourteen").click(function() {
    var task = $("#fourteen").val();
    localStorage.setItem("#fourteen", JSON.stringify(task));
});
$("#btnFifteen").click(function() {
    var task = $("#fifteen").val();
    localStorage.setItem("#fifteen", JSON.stringify(task));
});
$("#btnSixteen").click(function() {
    var task = $("#sixteen").val();
    localStorage.setItem("#sixteen", JSON.stringify(task));
});
$("#btnSeventeen").click(function() {
    var task = $("#seventeen").val();
    localStorage.setItem("#seventeen", JSON.stringify(task));
});

//Content entered into textareas remain
$("#nine").text(JSON.parse(localStorage.getItem("#nine")));
$("#ten").text(JSON.parse(localStorage.getItem("#ten")));
$("#eleven").text(JSON.parse(localStorage.getItem("#eleven")));
$("#twelve").text(JSON.parse(localStorage.getItem("#twelve")));
$("#thirteen").text(JSON.parse(localStorage.getItem("#thirteen")));
$("#fourteen").text(JSON.parse(localStorage.getItem("#fourteen")));
$("#fifteen").text(JSON.parse(localStorage.getItem("#fifteen")));
$("#sixteen").text(JSON.parse(localStorage.getItem("#sixteen")));
$("#seventeen").text(JSON.parse(localStorage.getItem("#seventeen")));