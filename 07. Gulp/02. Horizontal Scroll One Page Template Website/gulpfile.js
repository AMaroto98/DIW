const { src, dest, watch, series, parallel } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const cleanJs = require('gulp-uglify');
const concatCss = require('gulp-concat-css');
const concatJs = require('gulp-pseudoconcat-js');
const CleanHtml = require('gulp-htmlmin');
// const imagemin = require('gulp-imagemin');


function compilarScss() {
    return src("src/scss/slides.scss").pipe(scss()).pipe(dest("src/css"));
}

function watcherScss() {
    watch('src/scss/*scss', compilarScss);
}

function minimizaCss() {
    return src('src/css/*.css').pipe(cleanCss()).pipe(dest('dist/css'));
}

function minimizarJs() {
    return src('src/js/*.js').pipe(cleanJs()).pipe(dest('dist/js'));
}



function concatenaCss() {
    return src('dist/css/*.css').pipe(concatCss("all.css")).pipe(dest('dist/css'));
}

function minimizaCssDist() {
    return src('dist/css/all.css').pipe(cleanCss()).pipe(dest('dist/css'));
}


function concatenaJs() {
    return src("dist/js/*.js").pipe(concatJs("all.js")).pipe(dest("dist/js"));
}

// Preguntar si está función sería 100% necesaria ya que esta todo en una línea y es muy corta no es como el css que al juntarlo se pone en su estructura normal
function minimizaJsDist() {

}

function minimizaHtml() {
    return src("src/index.html").pipe(CleanHtml({ collapseWhitespace: true })).pipe(dest("dist"))
}

// function minimizaImagenes() {
//     return src("src/assets/*").pipe(imagemin()).pipe(dest("dist/assets"))
// }

function copiarImagenes() {
    return src("src/assets/**").pipe(dest("dist/assets"))
}

// exports.CompilarScss = compilarScss;
// exports.Watcher = watcherScss;
// exports.MinimizarCss = minimizaCss;
// exports.MinimizarJs = minimizarJs;
// exports.ConcatenarCss = series(concatenaCss, minimizaCssDist);
// exports.ConcatenarJs = concatenaJs;
// exports.MinimizarHtml = minimizaHtml;
// exports.CopiarImagenes = copiarImagenes;


exports.Horizontal = series(compilarScss, parallel(minimizaCss, minimizarJs), series(concatenaCss, minimizaCssDist), parallel(concatenaJs, minimizaHtml, copiarImagenes));


// Con este el CSS sale normal
// exports.Horizontal = series(compilarScss, minimizaCss, minimizarJs,concatenaCss, concatenaJs, minimizaHtml, copiarImagenes);