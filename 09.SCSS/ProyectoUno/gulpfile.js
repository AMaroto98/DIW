const { src, dest, series, watch } = require('gulp');
const scss = require('gulp-sass')(require('sass'));

function compilaSCSS() {
    return src("src/sass/*.scss")
    .pipe(scss({outputStyle: 'expanded'}))
    .pipe(dest("src/css"));
}

function watcher() {
    watch("src/sass/**/*.scss", compilaSCSS);
}

exports.CompilaSCSS = compilaSCSS;
exports.Watcher = watcher;