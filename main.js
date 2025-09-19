const days = document.querySelector('#day');
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
let newYear = document.querySelector('#newYear')

setInterval(function count() {

  let newdate = new Date();
  let now = new Date().getTime();
  let newYearNum = newdate.getFullYear() + 1;

  let newYears = new Date(`Jan 1, ${newYearNum}`).getTime();

  let countDown = newYears - now;

  let d = Math.floor(countDown / (1000 * 60 * 60 * 24));
  let h = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((countDown % (1000 * 60)) / 1000);

  newYear.innerHTML = newYearNum;
  days.innerHTML = d;
  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = sec;

}, 1000);

