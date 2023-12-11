const { src, dest, parallel } = require('gulp');

const copyGlobalScss = () => src('dist/scss/global.scss')
  .pipe(dest('build/styles'));

const copyMobileScss = () => src('dist/scss/mobile.scss')
  .pipe(dest('build/styles'));

const copyDesktopScss = () => src('dist/sass/desktop.scss')
  .pipe(dest('build/styles'));

exports.copy = parallel(copyGlobalScss, copyMobileScss, copyDesktopScss);
