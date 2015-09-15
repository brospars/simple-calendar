var gulp      = require('gulp'),
    rename    = require('gulp-rename'),     // Renommage des fichiers
    sass      = require('gulp-sass'),       // Conversion des SCSS en CSS
    jshint = require('gulp-jshint');
    uglify    = require('gulp-uglify');     // Minification/Obfuscation des JS
    plumber   = require('gulp-plumber'); // Evite l'arret de watch en cas d'erreur


// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Sass → CSS minify task
gulp.task('css', function() {
    return gulp.src('./src/*.scss')    // Prend en entrée les fichiers *.css
        .pipe(plumber())
        .pipe(sass())                   // transform le sass en css
        .pipe(gulp.dest('./dist/'));  // Sauvegarde le tout dans /src/style
});

// JS task
gulp.task('js', function() {
    return gulp.src('./src/jquery.simple-calendar.js')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/')) // Full version
        .pipe(rename('jquery.simple-calendar.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/')); // Minify version
});

gulp.task('watch', function() {
    gulp.watch('./src/*.js', ['lint', 'js', 'css']);
    gulp.watch('./src/*.scss', ['css']);
});

// Default Task
gulp.task('default', ['lint', 'css', 'js', 'watch']);