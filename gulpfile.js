var connect = require("connect")
var http = require("http")
var serveStatic = require("serve-static")
var gulp = require("gulp")
var webpack = require("gulp-webpack")

gulp.task("watch", function(){
	gulp.watch("./src/*.js", function(){
		return gulp.src("./src/index.js")
					.pipe(webpack({
						output: {
							filename: "index.js",
						},
						module: {
							loaders: [
								{
									test: /\.jsx?$/,
									loader: "babel",
									exclude: /node_modules/,
									query: {
										presets: ["es2015", "react"]
									},
								},
							],
						},
					}))
					.pipe(gulp.dest("./dist"))
	})
})