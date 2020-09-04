let vm = new Vue({
  el: "#profile-vue-app",
  delimiters: ["[[", "]]"],
  data: {
    hour1: "",
    hour2: "",
    teacher_times: [
      {
        id: 1,
        day: "Senin",
        dayId: "seninCheck",
        target: "seninTimes",
        isChecked: true,
        isAdding: false,
        times: [
          {
            id: 1,
            hour1: "08:00",
            hour2: "09:00",
            isEdit: false,
          },
          {
            id: 2,
            hour1: "09:00",
            hour2: "10:00",
            isEdit: false,
          },
        ],
      },
      {
        id: 2,
        day: "Selasa",
        dayId: "selasaCheck",
        target: "selasaTimes",
        isChecked: true,
        isAdding: false,
        isEdit: false,
        times: [
          {
            id: 1,
            hour1: "09:00",
            hour2: "09:00",
            isEdit: false,
          },
          {
            id: 2,
            hour1: "09:00",
            hour2: "10:00",
            isEdit: false,
          },
        ],
      },
      {
        id: 3,
        day: "Rabu",
        dayId: "rabuCheck",
        target: "rabuTimes",
        isChecked: false,
        isAdding: false,

        isEdit: false,
        times: [],
      },
      {
        id: 4,
        day: "Kamis",
        dayId: "kamisCheck",
        target: "kamisTimes",
        isChecked: true,
        isAdding: false,

        isEdit: false,
        times: [
          {
            id: 1,
            hour1: "08:00",
            hour2: "09:00",
            isEdit: false,
          },
        ],
      },
      {
        id: 5,
        day: "Jum'at",
        dayId: "jumatCheck",
        target: "jumatTimes",
        isChecked: true,
        isAdding: false,

        isEdit: false,
        times: [
          {
            id: 1,
            hour1: "08:00",
            hour2: "09:00",
            isEdit: false,
          },
          {
            id: 2,
            hour1: "09:00",
            hour2: "10:00",
            isEdit: false,
          },
          {
            id: 3,
            hour1: "10:00",
            hour2: "11:00",
            isEdit: false,
          },
        ],
      },
      {
        id: 6,
        day: "Sabtu",
        dayId: "sabtuCheck",
        target: "sabtuTimes",
        isChecked: true,
        isAdding: false,

        isEdit: false,
        times: [
          {
            id: 1,
            hour1: "08:00",
            hour2: "09:00",
            isEdit: false,
          },
          {
            id: 2,
            hour1: "09:00",
            hour2: "10:00",
            isEdit: false,
          },
          {
            id: 3,
            hour1: "10:00",
            hour2: "11:00",
            isEdit: false,
          },
        ],
      },
      {
        id: 7,
        day: "Minggu",
        dayId: "mingguCheck",
        target: "mingguTimes",
        isChecked: true,
        isAdding: false,

        isEdit: false,
        times: [
          {
            id: 1,
            hour1: "08:00",
            hour2: "09:00",
            isEdit: false,
          },
          {
            id: 2,
            hour1: "09:00",
            hour2: "10:00",
            isEdit: false,
          },
          {
            id: 3,
            hour1: "10:00",
            hour2: "11:00",
            isEdit: false,
          },
        ],
      },
    ],
  },
  methods: {
    changeCheckbox: function (id) {
      let allTimes = [...this.teacher_times];

      allTimes.forEach((time) => {
        if (time.id === parseInt(id)) {
          if (time.isChecked) {
            time.isChecked = false;
          } else {
            time.isChecked = true;
          }
        }
      });

      this.teacher_times = allTimes;
    },
    changeAddStatus: function (id) {
      let allTimes = [...this.teacher_times];

      allTimes.forEach((time) => {
        if (time.id === parseInt(id)) {
          if (time.isAdding) {
            time.isAdding = false;
          } else {
            time.isAdding = true;
          }
        }
      });

      this.teacher_times = allTimes;
    },
    saveTimes: function (id) {
      let allTimes = [...this.teacher_times];
      let lastIndex;
      allTimes.forEach((time) => {
        if (time.id === parseInt(id)) {
          let lastIndex = time.times.slice(-1).pop() || 0;
          if ((time.isAdding = true)) {
            let data = {
              id: lastIndex.id + 1,
              hour1: this.hour1,
              hour2: this.hour2,
              isEdit: false,
            };
            allTimes.forEach((time) => {
              if (time.id === parseInt(id)) {
                time.times.push(data);
              }
            });
          }
        }
      });
      this.hour1 = "";
      this.hour2 = "";
      this.teacher_times = allTimes;
    },
    editTimes: function (id, time_id) {
      let allTimes = [...this.teacher_times];
      allTimes.forEach((time) => {
        if (time.id === parseInt(id)) {
          time.times.forEach((range) => {
            if (range.id === time_id) {
              if (range.isEdit) {
                range.isEdit = false;
              } else {
                range.isEdit = true;
              }
            }
          });
        }
      });

      this.teacher_times = allTimes;
    },
    deleteTimes: function (id, time_id) {
      let allTimes = [...this.teacher_times];

      allTimes.forEach((time) => {
        if (time.id === parseInt(id)) {
          let newRanges = time.times.filter((range) => {
            return range.id !== parseInt(time_id);
          });
          time.times = newRanges;
        }
      });

      this.teacher_times = allTimes;
    },
  },
});
