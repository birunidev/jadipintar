// // days in month
// const date = new Date();

// let available_times = [
//   {
//     time_range: "00 - 04",
//     is_available: true,
//   },
//   {
//     time_range: "04 - 08",
//     is_available: false,
//   },
//   {
//     time_range: "08 - 12",
//     is_available: true,
//   },
//   {
//     time_range: "12 - 16",
//     is_available: false,
//   },
//   {
//     time_range: "16 - 20",
//     is_available: true,
//   },
//   {
//     time_range: "20 - 24",
//     is_available: true,
//   },
// ];

// function daysInMonth(month, year) {
//   var daysInMonth = moment().daysInMonth(month);
//   var arrDays = [];

//   while (daysInMonth) {
//     let current = moment().date(daysInMonth);
//     arrDays.push({
//       current_date: current,
//       times: available_times,
//     });
//     daysInMonth--;
//   }

//   return arrDays.reverse();
// }

// // render schedule days
// const scheduleDays = $("#schedule-days");
// const scheduleTimes = $(`#schedule-times`);

// const currentMonth = $("#current-month");

// // navigation buttons
// const prevBtn = $("#prev-month-btn");
// const nextBtn = $("#next-month-btn");

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// // get current year
// let year = date.getFullYear();

// // get current month
// let current_month = date.getMonth();

// // get days based on months
// let days = daysInMonth(current_month + 1, year);

// // render current month
// currentMonth.text(months[current_month]);
// // change month based on navigation
// console.log(days);

// function renderDays(start, ends) {
//   let daysHTML = ``;
//   let timesHTML = ``;
//   let availablesHTML = ``;

//   for (let i = start; i <= ends; i++) {
//     daysHTML +=
//       available_times[i] !== undefined
//         ? `<td class="pl-2">${available_times[i].time_range}</td>`
//         : null;

//     timesHTML += `<tr > <td class="day">
//     <p class="my-0 text-center">${days[i].current_date.format("ddd")}</p>
//     <p class="my-0 text-center">${days[i].current_date.date()}</p>
//   </td>`;

//     for (let k = 0; k < 7; k++) {
//       timesHTML += days[i].times[k]
//         ? `
//         <td class="availability">
//                         <button class="availability-btn ${
//                           days[i].times[k].is_available
//                             ? "has-availability"
//                             : "no-availability"
//                         }"></button>
//                       </td>
//         `
//         : null;
//     }
//     timesHTML += `</tr>`;
//   }

//   scheduleDays.html(`
//   <th></th>
//   ${daysHTML}
//   `);
//   scheduleTimes.html(timesHTML);
// }
// renderDays(0, 6);

// prevBtn.click(function () {
//   current_month = current_month <= 0 ? 0 : current_month - 1;
//   currentMonth.text(months[current_month]);
//   days = daysInMonth(current_month + 1, year);
//   // days based on month
//   renderDays(0, 6);
// });

// nextBtn.click(function () {
//   current_month = current_month >= 12 ? 12 : current_month + 1;
//   currentMonth.text(months[current_month]);
//   days = daysInMonth(current_month + 1, year);
//   renderDays(0, 6);
// });
