// Javascript Task Runner
'use strict';

var gulp = require('gulp');

function handleError(error) {
    console.log(error);
    this.emit('end');
}

gulp.task('styles', function() {
    var autoprefixer = require('gulp-autoprefixer');
    var sass = require('gulp-sass');

    gulp.src('styles/subreddit.scss')
        .pipe(sass({
            outputStyle: 'compact',
            indentWidth: 2
        })).on('error', handleError)
        .pipe(autoprefixer())
        .pipe(gulp.dest('build/'));
});

gulp.task('reddify', function() {
    var replace = require('gulp-replace');

    return gulp.src(['build/subreddit.css'])
        .pipe(replace('"jcsat14.png"', '%%jcsat14%%'))
        .pipe(replace('"dragon.png"', '%%dragonNew%%'))
        .pipe(replace('"spacex.png"', '%%spacex%%'))
        .pipe(replace('"sprites.png"', '%%sprites%%'))
        .pipe(replace('"falcon.png"', '%%falcon-new%%'))
        .pipe(replace('"swish.png"', '%%SwishCentered%%'))
        .pipe(replace('"awaitingvehicledownlink.png"', '%%AwaitingDownlink%%'))
        .pipe(replace('"spacenewstwitter.png"', '%%spacenewstwitter%%'))
        .pipe(replace('"arrowsprites.png"', '%%arrow-sprites%%'))
        .pipe(replace('"wikisprites.png"', '%%wikisprites%%'))
        .pipe(replace('"banner.jpg"', '%%banner2%%'))
        .pipe(replace('"flairsprites.png"', '%%flair-sprites%%'))
        .pipe(replace('"mission-sprites.png"', '%%mission-sprites%%'))
        .pipe(replace('"mission-sprites-2.png"', '%%mission-sprites-2%%'))
        .pipe(replace('"notificationsprites.png"', '%%notificationsprites%%'))
        .pipe(gulp.dest('build/'));
});

// Watch task. Watch for changes automatically and recompile the SASS.
gulp.task('watch', function() {
    gulp.watch('styles/*.scss', ['styles', 'reddify']);
});

gulp.task('default', ['watch']);