

var gulp=require('gulp'),
    gulputil=require('gulp-util'),
    path=require('path'),
    fs = require('fs-extra'),
    concat=require('gulp-concat'),
    http = require('http'),
    uglify = require('gulp-uglify'),
    dust = require('dustjs-elliptical'),
    merge = require('merge-stream'),
    watch=require('gulp-watch'),
    template=require('elliptical-template-build');




exports.template=function(opts){

    var src=(opts.fragmentsSrc !== undefined) ? opts.src.concat(opts.fragmentsSrc) : opts.src;

    watch({glob:src},function(files){
        template.compile(opts);
    });

};

exports.scripts=function(opts){

    watch({glob:opts.src},function(files){
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



