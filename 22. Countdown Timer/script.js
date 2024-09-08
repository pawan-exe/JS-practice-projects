const endDate = new Date("28 sep, 2024 11:00:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
  const now = new Date().getTime();
  const distanceCovered = now - startDate;
  const distancePending = endDate - now;

  // calculate days, hrs, mins and secs
  // 1 day = 24*60*60*1000;

  const days = Math.floor(distancePending / (24 * 60 * 60 * 1000));
  const hrs = Math.floor(
    (distancePending % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const mins = Math.floor((distancePending % (60 * 60 * 1000)) / (60 * 1000));
  const secs = Math.floor((distancePending % (60 * 1000)) / 1000);

  // populate in UI

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = mins;
  document.getElementById("seconds").innerHTML = secs;

  // calculate width % for progress bar
  const totalDistance = endDate - startDate;
  const percentageDistance = (distanceCovered / totalDistance) * 100;

  document.getElementById("progress-bar").style.width =
    percentageDistance + "%";

  if (distancePending < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    document.getElementById("progress-bar").style.width = "100%";
  }
}, 1000);
