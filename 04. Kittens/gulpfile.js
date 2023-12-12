const { series, src, dest, parallel, watch } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const limpiarCss = require('gulp-clean-css');
const limpiarJs = require('gulp-uglify');
const concatCss = require('gulp-concat-css');
const concatJs = require('gulp-pseudoconcat-js');

// 01. Compilar els arxius .scss de la carpeta "sass" i ficar-los dins una carpeta anomenada "css"
function compilaSass() {
    return src("src/sass/*.scss").pipe(scss()).pipe(dest("src/css"))
}

// 02. "sass:watch". Crea un watcher que vigili que quan hi ha un canvi a un arxiu .scss de tot el projecte es cridi a la tasca "sass".
function watcherSass() {
    watch('src/sass/partials/*scss', compilaSass);
}

// 3- Tasca "minimitzacss". Minimitza els arxius de la carpeta .css i deixa'ls dins la carpeta "dist/css". Prerequisit: tasca "sass".
function minimizaCss() {
    return src('src/css/*.css').pipe(limpiarCss()).pipe(dest('dist/css'));
}

// 4- Tasca "minimitzajs". Minimitza els arxius de la carpeta "js" i deixa'ls dins "dist/js".
function minimizaJs() {
    return src('src/js/*.js').pipe(limpiarJs()).pipe(dest('dist/js'));
}

// 5- Tasca "concatcss". Concatena tots els arxius de la carpeta "dist/css" en ORDRE i crea un fitxer "all.css" a "dist/css/all.css". Prerequisit: "minimitzacss"
function minimizaCssDist() {
    return src('dist/css/all.css').pipe(limpiarCss()).pipe(dest('dist/css'));

}

function concatenaCss() {
    return src('dist/css/*.css').pipe(concatCss("all.css")).pipe(dest('dist/css'));
}

// 6- Tasca "concatjs". Concatena tots els arxius de la carpeta "dist/js" en ORDRE i crea un fitxes "all.js" a "dist/js/all.js". Prerequisit: "minimitzajs".
function concatenaJs() {
    return src('dist/js/*.js').pipe(concatJs("all.js")).pipe(dest('dist/js'));

}

// Exports
// exports.CompilarSass = compilaSass;
// exports.WatcherSass = watcherSass;
// exports.MinimizaCss = minimizaCss;
// exports.MinimizaJs = minimizaJs;
// exports.ConcatenaCss = series(concatenaCss, minimizaCssDist);
// exports.ConcatenaJs = concatenaJs;

// 7- Crea una tasca "kittens" que executi totes les tasques (excepte els watchers), és a dir, executant la tasca "kittens" s'hauria de deixar preparat el projecte per pujar a producció.

exports.Kittens = series(compilaSass, minimizaCss, minimizaJs, series(concatenaCss, minimizaCssDist), concatenaJs);