const { src, dest, series, watch } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');

function compilaSCSS() {
    return src("src/sass/*.scss")
    .pipe(scss({outputStyle: 'expanded'}))
    .pipe(dest("src/css"));
}

function watcher() {
    watch("src/sass/**/*.scss", compilaSCSS);
}

function minimizaCss() {
    return src("src/css/*.css").pipe(cleanCss()).pipe(dest("dist/css"));
}

function concatenaCss() {
    return src("dist/css/*.css").pipe(concatCss("main.css")).pipe(dest("dist/css"));
}

exports.CompilaSCSS = compilaSCSS;
exports.Watcher = watcher;
exports.MinimizaCSS = minimizaCss;
exports.ConcatenaCSS = concatenaCss;