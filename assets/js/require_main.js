/**
 * Created by yan on 11/7/14.
 */
requirejs.config({
    baseUrl: "assets/js",
    waitSeconds: 20,
    paths: {
        backbone            : "../../bower_components/backbone/backbone",
        jquery              : "../../bower_components/jquery/dist/jquery",
        json2               : "../../bower_components/json2/json2",
        marionette          : "../../bower_components/marionette/lib/backbone.marionette",
        tpl                 : "../../bower_components/tpl/tpl",
        underscore          : "../../bower_components/underscore/underscore",
        d3                  : "../../bower_components/d3/d3",
        trianglify          : "../../bower_components/trianglify/trianglify"
//        bootstrap           : "vendor/bootstrap",
//        moment              : "vendor/moment",
//        chart               : "vendor/chart",
//        mousetrap           : "vendor/mousetrap",
//        spin                : "vendor/spin"
    },
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["jquery", "underscore", "json2"],
            exports: "Backbone"
        },
        marionette: {
            deps: ["backbone"],
            exports: "Marionette"
        },
        trianglify :{
            deps: ["d3"],
            exports:"trianglify"
        }
/*
        ,spin: {
            deps: ["jquery"],
            exports: "Spin"
        },
        bootstrap: {
            deps: ["jquery"],
            exports: "Bootstrap"
        },git commit -m 'Initial commit with contributors'

 chart: {
            exports: "Chart"
        }
*/
    }
});
require(["app","trianglify"], function (App) {
    App.start();
});

