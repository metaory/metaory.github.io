/**
 * Created by yan on 11/8/14.
 */
define(["app","metaory/metaory_view", "common/view"], function (App, View, CommonView) {
    App.module("Metaory", function(Metaory, App, Backbone, Marionette, $, _) {
       Metaory.Controller = {
            init: function () {

                App.main_region.show(new View.MainView())
            }
        }
    })
    return App.Metaory.Controller;
});

