const { src, dest } = require('gulp');

const copyScss = () => {
    return src('dist/**/*.scss')
        .pipe(dest('build/styles'));
};

const copyFile = () => {
    return src('dist/scss/index.scss')
        .pipe(dest('build/styles'));
};

exports.copy = copyFile;
exports.copy = copyScss;