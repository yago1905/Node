// // import emitter from 'emitter';
// // import moment from 'moment';
// //import EventEmitter from 'events';

// const EventEmitter = require('events');
// let emitter = new EventEmitter();
// require('moment-precise-range-plugin');
// const moment = require('moment');

// const [userPastDate] = process.argv.slice(2);
// const format = 'YYYY-MM-DD HH';

// const getDateFromDateString = (dateString) => {
//   const [hour, day, month, year] = dateString.split('-');
//   return new Date(Date.UTC(year, month - 1, day, hour));
// };

// const dateInFuture = getDateFromDateString(userPastDate);

// const showRemainingTime = (dateInFuture) => {
//   const dateNow = new Date();

//   if (dateNow >= dateInFuture) {
//     emitter.emit('timerEnd');
//   } else {
//     const currentDateFormatted = moment(dateNow, format);
//     const futureDateFormatted = moment(dateInFuture, format);
//     const diff = moment.preciseDiff(currentDateFormatted, futureDateFormatted);

//     console.log(diff);
//   }
// };

// const timerId = setInterval(() => {
//   emitter.emit('timerTick', dateInFuture);
// }, 1000);

// const showTimerDone = (timerId) => {
//   clearInterval(timerId);
//   console.log('End');
// };

// emitter.on('timerTick', showRemainingTime);
// emitter.on('timerEnd', () => {
//   showTimerDone(timerId);
// });
let timer = setInterval(function updateTimer() {
  let future = Date.parse('august 06, 2022 10:23:00');
  let now = new Date();
  let diff = future - now;

  let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(diff / (1000 * 60 * 60));
  let mins = Math.floor(diff / (1000 * 60));
  let secs = Math.floor(diff / 1000);

  let y = years;
  let d = days - years * 365;
  let h = hours - days * 24;
  let m = mins - hours * 60;
  let s = secs - mins * 60;

  if (y === 0 && d === 0 && h === 0 && m === 0 && s === 0) {
    clearInterval(timer);
    console.log('Стоп таймер');
  }

  if (y < 0) {
    clearInterval(timer);
    console.log('Мы не можем прыгать в прошлое)');
    return;
  }
  console.log(`Осталось ${y} лет: ${d} дней: ${h}часов: ${m}минут: ${s}секунд`);
}, 1000);
