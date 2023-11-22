const { src, dest, series, watch, parallel } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const cleanJs = require('gulp-uglify');
const concatCss = require('gulp-concat-css');
const concatJs = require('gulp-pseudoconcat-js');
const concatHtml = require('gulp-htmlmin');

function compilaScss() {
    return src("src/scss/slides.scss").pipe(scss()).pipe(dest("src/css"));
}

function watcherScss() {
    watch("src/scss/*.scss", compilaScss)
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

// Necesito esto para minify el archivo all.css porque por si solo no lo hace
function minimizaCssDist() {
    return src("dist/css/all.css").pipe(cleanCss()).pipe(dest("dist/css"));
}

function concatenaJs() {
    return src("dist/js/*.js").pipe(concatJs("all.js")).pipe(dest("dist/js"));
}

function minimizaHtml() {
    return src("src/index.html").pipe(concatHtml({ collapseWhitespace: true })).pipe(dest("dist"));
}

function copiarImagenes() {
    return src("src/assets/**").pipe(dest("dist/assets"));
}

exports.CompilarScss = compilaScss;
exports.Watcher = watcherScss;
exports.MinimizarCss = minimizaCss;
exports.MinimizarJs = minimizaJs;
exports.ConcatenarCss = concatenaCss;
exports.MinimizarCssDist = minimizaCssDist;
exports.ConcatenarJs = concatenaJs;
exports.MinimizaHtml = minimizaHtml;
exports.CopiarImagenes = copiarImagenes;

exports.Landing = series(compilaScss, parallel(minimizaCss, minimizaJs), parallel(series(concatenaCss, minimizaCssDist), concatenaJs, minimizaHtml, copiarImagenes));