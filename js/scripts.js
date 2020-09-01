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
