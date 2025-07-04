import gulp from "gulp";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import path from "path";
import webpackConfig from "./webpack.config.js";
import gcmq from "gulp-group-css-media-queries";
import { deleteAsync } from "del";
import imagemin from "gulp-imagemin";
import { createRequire } from "module";
import gulpSass from "gulp-sass";
import sassCompiler from "sass";
const requireD = createRequire(import.meta.url);
const gulpLoadPlugins = requireD("gulp-load-plugins");

const sass = gulpSass(sassCompiler);

let emittyPug;
let errorHandler;

const argv = yargs(hideBin(process.argv)).default({
  cache: true,
  debug: true,
  fix: false,
  minifyHtml: null,
  minifyCss: null,
  minifyJs: true,
  minifySvg: null,
  notify: true,
  open: true,
  port: 3000,
  spa: false,
  throwErrors: false,
  robots: true,
}).argv;

argv.minify = !!argv.minify;
argv.minifyHtml = argv.minifyHtml !== null ? !!argv.minifyHtml : argv.minify;
argv.minifyCss = argv.minifyCss !== null ? !!argv.minifyCss : argv.minify;
argv.minifyJs = argv.minifyJs !== null ? !!argv.minifyJs : argv.minify;
argv.minifySvg = argv.minifySvg !== null ? !!argv.minifySvg : argv.minify;

if (argv.ci) {
  argv.cache = false;
  argv.notify = false;
  argv.open = false;
  argv.throwErrors = true;

  webpackConfig.mode = "production";
} else {
  webpackConfig.mode = webpackConfig.mode || "development";
}

let $ = gulpLoadPlugins({
  overridePattern: false,
  pattern: [
    "autoprefixer",
    "browser-sync",
    "connect-history-api-fallback",
    "cssnano",
    "emitty",
    "imagemin-mozjpeg",
    "merge-stream",
    "postcss-reporter",
    "postcss-scss",
    "stylelint",
    "uglifyjs-webpack-plugin",
    "vinyl-buffer",
    "webpack",
    "webpack-stream",
    "append-prepend",
  ],
  scope: [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
  ],
});

if (argv.throwErrors) {
  errorHandler = false;
} else if (argv.notify) {
  errorHandler = $.notify.onError("<%= error.message %>");
} else {
  errorHandler = null;
}

function svgoConfig(minify = argv.minifySvg) {
  return (file) => {
    const filename = path.basename(file.relative, path.extname(file.relative));

    return {
      js2svg: {
        pretty: !minify,
        indent: 2,
      },
      plugins: [
        {
          name: "cleanupIDs",
          params: {
            minify: true,
            prefix: `${filename}-`,
          },
        },
        {
          removeViewBox: false,
        },
        "removeTitle",
        "sortAttrs",
      ],
    };
  };
}

gulp.task("copy", () => {
  return gulp
    .src(
      [
        "src/resources/**/*.*",
        "src/resources/**/.*",
        "!src/resources/**/.keep",
      ],
      {
        base: "src/resources",
        dot: true,
      }
    )
    .pipe($.if(argv.cache, $.newer("build")))
    .pipe($.if(argv.debug, $.debug()))
    .pipe(gulp.dest("build"));
});

gulp.task("images", () => {
  return gulp
    .src("src/images/**/*.*")
    .pipe($.if(argv.cache, $.newer("build/images")))
    .pipe($.if(argv.debug, $.debug()))
    .pipe(gulp.dest("build/images"));
});

gulp.task("sprites:png", () => {
  const spritesData = gulp
    .src("src/images/sprites/png/*.png")
    .pipe(
      $.plumber({
        errorHandler,
      })
    )
    .pipe($.if(argv.debug, $.debug()))
    .pipe(
      $.spritesmith({
        cssName: "_sprites.scss",
        cssTemplate: "src/scss/_sprites.hbs",
        imgName: "sprites.png",
        retinaImgName: "sprites@2x.png",
        retinaSrcFilter: "src/images/sprites/png/*@2x.png",
        padding: 2,
      })
    );

  return $.mergeStream(
    spritesData.img
      .pipe(
        $.plumber({
          errorHandler,
        })
      )
      .pipe($.vinylBuffer())
      .pipe(imagemin())
      .pipe(gulp.dest("build/images")),
    spritesData.css.pipe(gulp.dest("src/scss"))
  );
});

gulp.task("sprites:svg", () => {
  return gulp
    .src("src/images/sprites/svg/*.svg")
    .pipe(
      $.plumber({
        errorHandler,
      })
    )
    .pipe($.if(argv.debug, $.debug()))
    .pipe($.svgmin(svgoConfig()))
    .pipe($.svgstore())
    .pipe($.if(!argv.minifySvg, $.replace(/^\t+$/gm, "")))
    .pipe($.if(!argv.minifySvg, $.replace(/\n{2,}/g, "\n")))
    .pipe($.if(!argv.minifySvg, $.replace("?><!", "?>\n<!")))
    .pipe($.if(!argv.minifySvg, $.replace("><svg", ">\n<svg")))
    .pipe($.if(!argv.minifySvg, $.replace("><defs", ">\n\t<defs")))
    .pipe($.if(!argv.minifySvg, $.replace("><symbol", ">\n<symbol")))
    .pipe($.if(!argv.minifySvg, $.replace("></svg", ">\n</svg")))
    .pipe($.rename("sprites.svg"))
    .pipe(gulp.dest("build/images"));
});

gulp.task("pug", () => {
  if (!emittyPug) {
    emittyPug = $.emitty.setup("src", "pug", {
      makeVinylFile: true,
    });
  }

  if (!argv.cache) {
    return gulp
      .src("src/*.pug")
      .pipe(
        $.plumber({
          errorHandler,
        })
      )
      .pipe($.if(argv.debug, $.debug()))
      .pipe(
        $.pug({
          pretty: argv.minifyHtml ? false : 2,
        })
      )
      .pipe(gulp.dest("build"));
  }

  return new Promise((resolve, reject) => {
    emittyPug.scan(global.emittyPugChangedFile).then(() => {
      gulp
        .src("src/*.pug")
        .pipe(
          $.plumber({
            errorHandler,
          })
        )
        .pipe(emittyPug.filter(global.emittyPugChangedFile))
        .pipe($.if(argv.debug, $.debug()))
        .pipe(
          $.pug({
            pretty: argv.minifyHtml ? false : "\t",
          })
        )
        .pipe(gulp.dest("build"))
        .on("end", resolve)
        .on("error", reject);
    });
  });
});

gulp.task("format-html", () => {
  return gulp
    .src("build/*.html")
    .pipe(
      $.formatHtml({
        indent_size: 4,
        indent_char: " ",
        eol: "\n",
        indent_level: 0,
        indent_with_tabs: false,
        preserve_newlines: true,
        max_preserve_newlines: 10,
        jslint_happy: false,
        space_after_anon_function: false,
        brace_style: "collapse",
        keep_array_indentation: false,
        keep_function_indentation: false,
        space_before_conditional: true,
        break_chained_methods: false,
        eval_code: false,
        unescape_strings: false,
        wrap_line_length: 0,
        wrap_attributes: "auto",
        wrap_attributes_indent_size: 4,
        end_with_newline: false,
        extra_liners: ["head", "body", "main", "section"],
        inline: [
          "abbr",
          "area",
          "audio",
          "b",
          "bdi",
          "bdo",
          "br",
          "canvas",
          "cite",
          "code",
          "data",
          "datalist",
          "del",
          "dfn",
          "em",
          "embed",
          "i",
          "iframe",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "map",
          "mark",
          "math",
          "meter",
          "noscript",
          "object",
          "output",
          "progress",
          "q",
          "ruby",
          "s",
          "samp",
          "select",
          "small",
          "span",
          "strong",
          "sub",
          "sup",
          "template",
          "textarea",
          "time",
          "u",
          "var",
          "video",
          "wbr",
          "text",
          "acronym",
          "big",
          "dt",
          "ins",
          "strike",
          "tt",
        ],
      })
    )
    .pipe(gulp.dest("build"));
});

gulp.task("scss", () => {
  const postcssPlugins = [
    $.autoprefixer({
      grid: "autoplace",
    }),
  ];

  if (argv.minifyCss) {
    postcssPlugins.push(
      $.cssnano({
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      })
    );
  }

  return (
    gulp
      .src(["src/scss/*.scss", "!src/scss/_*.scss"])
      .pipe(
        $.plumber({
          errorHandler,
        })
      )
      .pipe($.if(argv.debug, $.debug()))
      // .pipe($.sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe($.postcss(postcssPlugins))
      .pipe(gcmq())
      // .pipe($.sourcemaps.write("."))
      .pipe(gulp.dest("build/css"))
  );
});

gulp.task("js", () => {
  return gulp
    .src(webpackConfig.entry)
    .pipe(
      $.plumber({
        errorHandler,
      })
    )
    .pipe($.webpackStream(webpackConfig))
    .pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task("lint:pug", () => {
  return gulp.src(["src/*.pug", "src/pug/**/*.pug"]).pipe(
    $.plumber({
      errorHandler,
    })
  );
  // .pipe(
  //   $.pugLinter({
  //     reporter: "default",
  //     failAfterError: argv.throwErrors,
  //   })
  // );
});

gulp.task("lint:scss", () => {
  return gulp
    .src(["src/scss/**/*.scss", "!src/scss/vendor/**/*.scss"])
    .pipe(
      $.plumber({
        errorHandler,
      })
    )
    .pipe(
      $.postcss(
        [
          $.stylelint(),
          $.postcssReporter({
            clearReportedMessages: true,
            throwError: argv.throwErrors,
          }),
        ],
        {
          parser: $.postcssScss,
        }
      )
    );
});

gulp.task("lint:js", () => {
  return gulp
    .src(["*.js", "src/js/**/*.js", "!src/js/vendor/**/*.js"], {
      base: ".",
    })
    .pipe(
      $.plumber({
        errorHandler,
      })
    )
    .pipe(
      $.eslint({
        fix: argv.fix,
      })
    )
    .pipe($.eslint.format())
    .pipe($.if((file) => file.eslint && file.eslint.fixed, gulp.dest(".")));
});

gulp.task("validate:html", () => {
  return gulp
    .src("build/**/*.html")
    .pipe(
      $.plumber({
        errorHandler,
      })
    )
    .pipe($.w3cHtmlValidator());
});

gulp.task("optimize:images", () => {
  return gulp
    .src("src/images/**/*.*")
    .pipe(
      $.plumber({
        errorHandler,
      })
    )
    .pipe($.if(argv.debug, $.debug()))
    .pipe(
      imagemin([
        imagemin.gifsicle({
          interlaced: true,
        }),
        imagemin.optipng({
          optimizationLevel: 3,
        }),
        imageminMozjpeg({
          progressive: true,
          quality: 80,
        }),
      ])
    )
    .pipe(gulp.dest("src/images"));
});

gulp.task("optimize:svg", () => {
  return gulp
    .src("src/images/**/*.svg", {
      base: "src/images",
    })
    .pipe(
      $.plumber({
        errorHandler,
      })
    )
    .pipe($.if(argv.debug, $.debug()))
    .pipe($.svgmin(svgoConfig(false)))
    .pipe(gulp.dest("src/images"));
});

gulp.task("watch", () => {
  gulp.watch(
    ["src/resources/**/*.*", "src/resources/**/.*"],
    gulp.series("copy")
  );

  gulp.watch("src/images/**/*.*", gulp.series("images"));

  gulp.watch(
    ["src/images/sprites/png/*.png", "src/scss/_sprites.hbs"],
    gulp.series("sprites:png")
  );

  gulp.watch("src/images/sprites/svg/*.svg", gulp.series("sprites:svg"));

  gulp
    .watch(
      ["src/*.pug", "src/pug/**/*.pug"],
      {
        delay: 0,
      },
      gulp.series("pug")
    )
    .on("all", (event, file) => {
      global.emittyPugChangedFile = event === "unlink" ? undefined : file;
    });

  gulp.watch("src/scss/**/*.scss", gulp.series("scss"));

  gulp.watch("src/js/**/*.js", gulp.series("js"));
});

gulp.task("serve", () => {
  let middleware = [];

  if (argv.spa) {
    middleware.push($.connectHistoryApiFallback());
  }

  $.browserSync.create().init({
    notify: false,
    open: argv.open,
    port: argv.port,
    files: ["./build/**/*"],
    server: {
      baseDir: "./build",
      middleware,
    },
  });
});

gulp.task("zip", () => {
  // eslint-disable-next-line global-require
  let name = require("./package").name;
  let now = new Date();
  let year = now.getFullYear().toString().padStart(2, "0");
  let month = (now.getMonth() + 1).toString().padStart(2, "0");
  let day = now.getDate().toString().padStart(2, "0");
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");

  return gulp
    .src(
      [
        "build/**",
        "src/**",
        ".babelrc",
        ".editorconfig",
        ".eslintignore",
        ".eslintrc",
        ".gitignore",
        ".npmrc",
        ".stylelintignore",
        ".stylelintrc",
        "*.js",
        "*.json",
        "*.md",
        "*.yml",
        "!package-lock.json",
        "!zip/**",
      ],
      {
        base: ".",
        dot: true,
      }
    )
    .pipe($.zip(`${name}_${year}-${month}-${day}_${hours}-${minutes}.zip`))
    .pipe(gulp.dest("zip"));
});

gulp.task("robots", () => {
  return !argv.robots ? deleteAsync(["./build/robots.txt"]) : Promise.resolve();
});

gulp.task("lint", gulp.series("lint:pug", "lint:scss", "lint:js"));

gulp.task(
  "build",
  gulp.series(
    "copy",
    "pug",
    "robots",
    gulp.parallel(
      "images",
      "sprites:png",
      "sprites:svg",
      "scss",
      "js",
      "format-html"
    )
  )
);

gulp.task("default", gulp.series("build", gulp.parallel("watch", "serve")));
