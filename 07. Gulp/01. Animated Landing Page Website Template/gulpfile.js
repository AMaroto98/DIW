const { src, dest, watch, series, parallel } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const cleanJs = require('gulp-uglify');
const concatCss = require('gulp-concat-css');
const concatJs = require('gulp-pseudoconcat-js');
const cleanHtml = require('gulp-htmlmin');



function compilaSass() {
    return src("src/scss/slides.scss").pipe(scss()).pipe(dest("css"))
}

function watcherSass() {
    watch('src/scss/*.scss', compilaSass);
}

function minimizaCss() {
    return src('src/css/*.css').pipe(cleanCss()).pipe(dest('dist/css'));
}

function minimizaJs() {
    return src('src/js/*.js').pipe(cleanJs()).pipe(dest('dist/js'));
}

function minimizaCssDist() {
    return src('dist/css/all.css').pipe(cleanCss()).pipe(dest('dist/css'));

}

function concatenaCss() {
    return src('dist/css/*.css').pipe(concatCss("all.css")).pipe(dest('dist/css'));
}

function minimizaJsDist() {
    return src('dist/js/all.js').pipe(cleanJs()).pipe(dest('dist/js'));

}

function concatenaJs() {
    return src('dist/js/*.js').pipe(concatJs("all.js")).pipe(dest('dist/js'));
}

function minimizaHtml() {
    return src('src/index.html').pipe(cleanHtml({ collapseWhitespace: true })).pipe(dest('dist'));
}

function copiarImagenes() {
    return src("src/assets/**").pipe(dest("dist/assets"))
}




exports.CompilarSass = compilaSass;
exports.MinimizarCss = minimizaCss;
exports.WatcherSass = watcherSass;
exports.MinimizarJs = minimizaJs;
exports.ConcatenaCss = series(concatenaCss, minimizaCssDist);
exports.ConcatenaJs = series(concatenaJs, minimizaJsDist);
exports.MinimizarHtml = minimizaHtml;


// exports.Animated = series(series(compilaSass, minimizaCss), minimizaJs, series(concatenaCss, minimizaCssDist), series(concatenaJs, minimizaJsDist), parallel(minimizaHtml, copiarImagenes));
exports.Animated = series(series(compilaSass, minimizaCss), minimizaJs, concatenaCss, series(concatenaJs, minimizaJsDist), parallel(minimizaHtml, copiarImagenes));
