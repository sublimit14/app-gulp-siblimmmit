const {src, dest, parallel, series, watch} = require('gulp');
const sass = require ('gulp-sass');

const styles = () => {
    return src('.scr/sass/**/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
}

exports.styles = styles;