const { src, dest, series, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const cleanJs = require('gulp-uglify');
const concatCss = require('gulp-concat-css');
const concatJs = require('gulp-pseudoconcat-js');
const cleanHtml = require('gulp-htmlmin');

function compilaSass() {
    return src("src/scss/slides.scss").pipe(sass()).pipe(dest("src/css"));
}

function watcherSass() {
    watch("src/scss/*.scss", compilaSass);
}

function minimizaCss() {
    return src("src/css/*.css").pipe(cleanCss()).pipe(dest("dist/css"));
}

function minimizaJs() {
    return src("src/js/*.js").pipe(cleanJs()).pipe(dest("dist/js"));
}

function concatenaCss() {
    return src("dist/css/*.css").pipe(concatCss("all.css")).pipe(dest("dist/css"));
}

function minimizarCssDist() {
    return src("dist/css/all.css").pipe(cleanCss()).pipe(dest("dist/css"));
}

function concatenaJs() {
    return src("dist/js/*.js").pipe(concatJs("all.js")).pipe(dest("dist/js"));
}

function minimizaHtml() {
    return src("src/index.html").pipe(cleanHtml({ collapseWhitespace: true })).pipe(dest("dist"));
}

function copiarImagenes() {
    return src("src/assets/**").pipe(dest("dist/assets"))
}

exports.CompilarSass = compilaSass;
exports.MinimizarCss = minimizaCss;
exports.MinimizarJs = minimizaJs;
exports.ConcatenarCss = concatenaCss;
exports.MinimizarCssDist = minimizarCssDist;
exports.ConcatenarJs = concatenaJs;
exports.MinimizarHtml = minimizaHtml;
exports.CopiarImagenes = copiarImagenes;

exports.Page = series(compilaSass, parallel(minimizaCss, minimizaJs), series(concatenaCss, minimizarCssDist), parallel(concatenaJs, minimizaHtml, copiarImagenes));