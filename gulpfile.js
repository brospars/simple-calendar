const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const rename = require('gulp-rename');
const uglify = require('gulp-terser');
const plumber = require('gulp-plumber');

function css() {
    return src('src/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest('dist'))
}

function js() {
    return src('src/jquery.simple-calendar.js')
        .pipe(plumber())
        .pipe(dest('dist'))
        .pipe(rename('jquery.simple-calendar.min.js'))
        .pipe(uglify())
        .pipe(dest('dist'));
}

watch('src/*.scss', css);
watch('src/*.js', js);

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);
