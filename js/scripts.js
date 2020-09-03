// register scripts

const studentBtn = document.getElementById("student-btn");
const teacherBtn = document.getElementById("teacher-btn");
const registerForm = document.getElementById("register-form");

function studentForm(e) {
  studentBtn.classList.add("active");
  teacherBtn.classList.remove("active");

  registerForm.innerHTML = `
  <form action="" method="POST">
                <div class="form-group mt-4">
                  <input
                    type="text"
                    class="form-control py-4"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group mt-4">
                  <input
                    type="text"
                    class="form-control py-4"
                    placeholder="Email"
                  />
                </div>
                <select class="form-control">
                  <option selected>Gender </option>
                  <option >Laki-laki </option>
                  <option >Perempuan </option>

                </select>
                <div class="form-group mt-4">
                  <input
                    type="text"
                    class="form-control py-4"
                    placeholder="HP Number"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control py-4"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  class="my-4 btn btn-primary btn-block btn-lg"
                >
                  Sign Up
                </button>
              </form>
  `;
}

function teacherForm() {
  studentBtn.classList.remove("active");
  teacherBtn.classList.add("active");
  registerForm.innerHTML = `
  <form action="" method="POST">
                <div class="form-group mt-4">
                  <input
                    type="text"
                    class="form-control py-4"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group mt-4">
                  <input
                    type="text"
                    class="form-control py-4"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group mt-4">
                  <input
                    type="text"
                    class="form-control py-4"
                    placeholder="HP Number"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control py-4"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  class="my-4 btn btn-primary btn-block btn-lg"
                >
                  Sign Up
                </button>
              </form>
  `;
}
// register scripts ends

// upload scripts
const uploadBtn = document.getElementById("upload-photo-btn");
const uploadInput = document.getElementById("upload-photo-input");
const uploadIdBtn = document.getElementById("upload-id-btn");
const uploadIdInput = document.getElementById("upload-id-input");
const uploadIjazahBtn = document.getElementById("upload-ijazah-btn");
const uploadIjazahInput = document.getElementById("upload-ijazah-input");

if (uploadBtn)
  uploadBtn.addEventListener("click", function () {
    uploadInput.click();
  });

if (uploadIdBtn)
  uploadIdBtn.addEventListener("click", function () {
    uploadIdInput.click();
  });

if (uploadIjazahBtn)
  uploadIjazahBtn.addEventListener("click", function () {
    uploadIjazahInput.click();
  });

// upload scripts ends

// Video scripts
const teacherVidThumbnail = document.querySelector(".teacher-video-thumbnail");
const teacherVidContent = document.querySelector(".teacher-video-content");
const teacherBtnPlay = document.getElementById("teacher-btn-play");
function showVideo() {
  if (teacherVidThumbnail) teacherVidThumbnail.classList.add("d-none");
  if (teacherVidContent) {
    teacherVidContent.classList.remove("d-none");
    teacherVidContent.classList.add("d-block");
    teacherVidContent.play();
  }
}
if (teacherVidThumbnail)
  teacherVidThumbnail.addEventListener("click", showVideo);
if (teacherBtnPlay) teacherBtnPlay.addEventListener("click", showVideo);

// poppers
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Availability Modal
const modalBookBtn = $("#modal-book-btn");
modalBookBtn.click(function () {
  $(this).toggleClass("d-none");
  $("#modal-cancel-btn").toggleClass("d-none");
  $("#modal-confirm-btn").toggleClass("d-none");
  $("#scheduler-modal-component").toggleClass("d-none");
  $("#avail-modal-title").text("Summary of Booking order");
  $(".summary-booking-wrapper").toggleClass("d-none");
});

$("#modal-cancel-btn").click(function () {
  $(this).toggleClass("d-none");
  $("#modal-confirm-btn").toggleClass("d-none");
  modalBookBtn.toggleClass("d-none");
  $("#scheduler-modal-component").toggleClass("d-none");
  $("#avail-modal-title").text("Cek ketersediaan");
  $(".summary-booking-wrapper").toggleClass("d-none");
});

// Availability Modal Ends

// sidebar
function showSidebar() {
  $("#sidebar").toggleClass("active");
}
