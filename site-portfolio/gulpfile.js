var gulp = require('gulp');
var browserSync  = require('browser-sync').create();
var less  = require('gulp-less');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var cssnano = require('gulp-cssnano'); // Подключаем пакет для минификации CSS
var rename = require('gulp-rename'); // Подключаем библиотеку для переименования файлов
var del = require('del'); // Подключаем библиотеку для удаления файлов и папок
var imagemin = require('gulp-imagemin'); // Подключаем библиотеку для работы с изображениями
var pngquant = require('imagemin-pngquant'); // Подключаем библиотеку для работы с png
var cache = require('gulp-cache'); // Подключаем библиотеку кеширования
var autoprefixer = require('gulp-autoprefixer');
gulp.task('copy', function(){
	gulp.src('./app/index.html').pipe(gulp.dest('./dist'));
});

gulp.task('server', ['less', 'mincss'], function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });

    gulp.watch('./app/**/*.html').on('change', browserSync.reload);
    gulp.watch('./app/**/*.css').on('change', browserSync.reload);
    gulp.watch('./app/less/**/*.less', ["less"]);

});

gulp.task("less", function(){
	 return gulp.src('./app/less/main.less')
	 .pipe(plumber({
	 	errorHandler : notify.onError(function(err){
	 		return {
	 			title : 'Styles',
	 			message: err.message
	 		}
	 	})
	 }))
	 .pipe(less())
	 .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	 .pipe(gulp.dest('./app/css'))
	 .pipe(browserSync.stream());
})

gulp.task('img', function() {
    return gulp.src('app/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('mincss',["less"], function() {
    return gulp.src('app/css/*.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        .pipe(gulp.dest('app/css-min/')); // Выгружаем в папку app/css
});

gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({ // Сжимаем их с наилучшими настройками
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('build', ['clean','img','less'], function() {

    var buildCss = gulp.src([ // Переносим CSS стили в продакшен
        'app/css-min/*.css',
        'app/css/*.css',
        ])
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))

    // var buildJs = gulp.src('app/js/**/*')  Переносим скрипты в продакшен
    // .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

});

/*gulp.task("sass", function(){
	 return gulp.src('./app/sass/main.sass').pipe(sass()).pipe(gulp.dest('./app/css'))
})*/

gulp.task('default', ["server"]);