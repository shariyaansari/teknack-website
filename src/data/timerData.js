// Define the countdown date in IST
var countDownDate = new Date("2025-03-03T00:00:00+05:30").getTime();

// Update the timer every second
var x = setInterval(function () {
  // Get the current time in IST
  var now = new Date();
  var utc = now.getTime() + now.getTimezoneOffset() * 60000; // Convert to UTC
  var istNow = new Date(utc + 5.5 * 60 * 60 * 1000); // Add IST offset (5 hours 30 minutes)

  // Calculate the remaining time
  var distance = countDownDate - istNow.getTime();

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the corresponding elements
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is finished, display "EXPIRED"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
  }
}, 1000);
