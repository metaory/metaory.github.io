/**
 * Created by yan on 11/7/14.
 */

define(["marionette"], function (Marionette) {

    var App = new Marionette.Application();

    App.server_url = 'http://127.0.0.1:3000';
    App.server_timeout = 100;
    App.addRegions({
        main_region: "#main-region"
    });

    Marionette.Region.prototype.attachHtml = function (view) {
        this.$el.hide();
        this.$el.html(view.el);
        this.$el.fadeIn("slow");
    }



    App.navigate = function (route, options) {
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    App.getCurrentRoute = function () {
        return Backbone.history.fragment
    };

    App.on("start", function () {
        console.log('>>  initiating v.', App.version);
        require(["router"], function () {
            if (Backbone.history) {
                Backbone.history.start();
            }
        });

    });

    App.version = "0.0.0";

    return App;
});
