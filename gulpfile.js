var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    bower = require('gulp-bower');


gulp.task('html', function () {
    gulp.src('public/**/*.html')

        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('public/**').on('change', livereload.changed);
});


gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest('lib/'))
});

gulp.task('default', ['bower','html','watch']);