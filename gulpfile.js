var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    embedlr = require("gulp-embedlr");

gulp.task('html', function () {
    gulp.src('public/**/*.html')
        .pipe(embedlr())
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('public/**').on('change', livereload.changed);
});



gulp.task('default', ['html','watch']);