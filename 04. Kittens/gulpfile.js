const { series, src, dest, parallel, watch } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const limpiarCss  = require('gulp-clean-css');
const limpiarJs = require('gulp-uglify');




// 01. Compilar els arxius .scss de la carpeta "sass" i ficar-los dins una carpeta anomenada "css"
function compilaSass() {
    return src("src/sass/partials/*.scss").pipe(scss()).pipe(dest("src/css"))
}

// 02. "sass:watch". Crea un watcher que vigili que quan hi ha un canvi a un arxiu .scss de tot el projecte es cridi a la tasca "sass".
function watcherSass() {
    watch('src/scss/partials/*scss', compilaSass);
}

// 3- Tasca "minimitzacss". Minimitza els arxius de la carpeta .css i deixa'ls dins la carpeta "dist/css". Prerequisit: tasca "sass".
function minimizaCss() {
    return src('src/css/*.css').pipe(limpiarCss()).pipe(dest('dist/css'));
}

// 4- Tasca "minimitzajs". Minimitza els arxius de la carpeta "js" i deixa'ls dins "dist/js".
function minimizaJs() {
    return src('src/js/*.js').pipe(limpiarJs()).pipe(dest('dist/js'));
}

// Exports
exports.CompilarSass = compilaSass;
exports.WatcherSass = watcherSass;
exports.MinimizaCss = minimizaCss;
exports.MinimizaJs = minimizaJs;