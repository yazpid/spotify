


var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    htmlReplace = require('gulp-html-replace'),
    useref = require('gulp-useref'),
    cssnano = require('gulp-cssnano'),
    package = require('./package.json');

gulp.task('sass', function () {
   return gulp.src('app/assets/scss/**/*.scss')
       .pipe(sourcemaps.init({loadMaps: true}))
       .pipe(sass().on('error', sass.logError))
       .pipe(sourcemaps.write('maps'))
       .pipe(gulp.dest('app/assets/css'));
});

gulp.task('watch', function () {
   gulp.watch('app/assets/scss/**/*.scss', ['sass'])
});




gulp.task('build', ['sass'], function () {

    refreshHtmlFiles();
    refreshConcatFilesToProduction();
    copyImgAsset();
    copySvgAsset();
    copyManifest();

   function refreshHtmlFiles() {
       return gulp.src('app/**/*.html')
           .pipe(gulpif('!index.html', gulp.dest('public') ));
   }

   function refreshConcatFilesToProduction() {
       return gulp.src('app/index.html')
           .pipe(htmlReplace({'version':package.version}))
           .pipe(useref())
           .pipe(gulpif('*.css', cssnano()))
           .pipe(gulpif('*.js', uglify()))
           .pipe(gulp.dest('public'));
   }

    function copyImgAsset(){
        return gulp.src('app/assets/image/*')
            .pipe(gulp.dest('public/assets/image'));
    }

    function copySvgAsset(){
        return gulp.src('app/assets/svg/*')
            .pipe(gulp.dest('public/assets/svg'));
    }

    function copyManifest() {
        return gulp.src('app/manifest.json')
            .pipe(gulp.dest('public'));
    }

});