

var gulp=require('gulp'),
    concat=require('gulp-concat'),
    watch=require('gulp-watch');


exports.scripts=function(opts){
    watch(opts.src,function(files){
        concatScripts(opts);
    });
};


function concatScripts(opts){
    var src=opts.src;
    var dest=opts.dest;
    var destFile=opts.destFile;
    gulp.src(src)
        .pipe(concat(destFile))
        .pipe(gulp.dest(dest));
}



