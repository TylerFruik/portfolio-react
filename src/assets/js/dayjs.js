$(function () {
  // sets the current hour by calling the DayJS API
  var currentHour = dayjs().hour();
  console.log("hour log: ", currentHour);
  getCurrentDate();
});

function getCurrentDate() {
  var now = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(now);
}
