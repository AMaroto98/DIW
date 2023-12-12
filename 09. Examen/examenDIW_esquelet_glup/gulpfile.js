const { src, dest, series, watch, parallel } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const cleanJs = require('gulp-uglify');
const concatJs = require('gulp-pseudoconcat-js');


function compilaSCSS() {
    return src("libs/bootstrap-4.5.3/scss/*.scss")
    .pipe(scss())
    .pipe(cleanCss())
    .pipe(dest("assets/css/bootstrap"));
}

function watchSCSS() {
    watch("./*.scss", compilaSCSS)
}

function mergeCSS() {
    return src("assets/css//bootstrap/*.css").pipe(concatCss("style.css")).pipe(dest("dist/css"));
}

function minifyJS() {
    return src("assets/js/*.js").pipe(cleanJs()).pipe(dest("dist/js"));
}

function concatJS() {
    return src("dist/js/*.js")
    .pipe(concatJs("all.js"))
    .pipe(cleanJs())
    .pipe(dest("dist/js"));
}





exports.CompilaSCSS = compilaSCSS;
exports.WatchSCSS = watchSCSS;
exports.MergeCSS = mergeCSS;
exports.MinifyJS = minifyJS;
exports.ConcatJS = concatJS;


exports.Examen = parallel(series(compilaSCSS, mergeCSS), series(minifyJS, concatJS));



