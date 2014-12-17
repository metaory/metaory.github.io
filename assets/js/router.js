/**
 * Created by yan on 11/8/14.
 */
define(["app"], function (App) {
    App.module("Qulij", function (Qulij, App, Backbone, Marionette, $, _) {
        Qulij.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "": "init",
                "fc":"factor"
            }
        });

        var API = {
            init: function () {


                require(["metaory/metaory_controller"], function (Metaory_controller) {
                    Metaory_controller.init();
                });
            },
            factor:function(){
                require(["factor/factor_controller"], function (Factor_controller) {
                    Factor_controller.init();
                });
            }
        };


        App.addInitializer(function () {
            new Qulij.Router({
                controller: API
            });
        });


    });
    return App.Qulij;
});