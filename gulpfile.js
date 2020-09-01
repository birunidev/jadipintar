const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");

function style() {
  return src("./scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
}

function watches() {
  browserSync.init({
    server: {
      baseDir: ".",
      index: "/index.html",
    },
  });
  watch("./scss/**/*.scss", style);
  watch("./**/*.html").on("change", browserSync.reload);
  watch("./js/**/*.js").on("change", browserSync.reload);
}

exports.default = series(style, watches);
