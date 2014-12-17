/**
 * Created by yan on 11/22/14.
 */
define(["app", "factor/factor_view", "common/view"], function (App, View, CommonView) {
    App.module("Factor", function (Factor, App, Backbone, Marionette, $, _) {
        Factor.Controller = {
            init: function () {
                AddScene()
            }


        };

        function AddScene() {

            var VideoModel = new Backbone.Model({title:"video title"})

            var VideoComponent = new View.VideoComponent({model:VideoModel})

            var multi = new View.MultiR();
//            var VideoMenu = new View.ComponentBaseView({model:VideoModel})
//            var VideoPlayer = new View.ComponentBaseView({model:VideoModel})
//            VideoComponent.main_component_region.show(VideoPlayer)
//            VideoComponent.menu_component_region.show(VideoMenu)
//
        }

    })
    return App.Factor.Controller;
});
