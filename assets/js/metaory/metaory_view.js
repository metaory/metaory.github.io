/**
 * Created by yan on 11/8/14.
 */

define(["app", "trianglify", "d3"

], function (App, glify, d3) {
    App.module("Metaory.View", function (View, App, Backbone, Marionette, $, _) {


        View.MainView = Marionette.ItemView.extend({
            template: _.template('<h1 style="text-align: center; text-shadow: 1px 1px 5px #000; ">metaory</h1>'),

            onDomRefresh: function () {

                console.log("=== >>",window.outerHeight);
                this.$el.css('min-height',window.innerHeight-45)
                var t = new Trianglify({
                    cellpadding: 80,
                    cellsize: 200});

                var pattern = t.generate(document.body.clientWidth, document.body.clientHeight);
                document.body.setAttribute('style', 'background-image: ' + pattern.dataUrl);

                //var t = new Trianglify();
                //var pattern = t.generate(document.body.clientWidth, document.body.clientHeight);

            }
        })


    });
    return App.Metaory.View;
});