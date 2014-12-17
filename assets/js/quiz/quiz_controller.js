/**
 * Created by yan on 11/8/14.
 */
define(["app","quiz/quiz_view", "common/view"], function (App, View, CommonView) {
    App.module("Qulij", function(Quiz, App, Backbone, Marionette, $, _) {
       Quiz.Controller = {
            init: function () {

                App.menu_main.show(new View.Pane({model: new Backbone.Model({title:'menu'}),className:"col-md-12 bg1"}))

                App.pane_1_region.show(new View.Pane({model: new Backbone.Model({title:'pl1'}),className:"col-md-3 bg2", id:"pl1"}))
                App.pane_2_region.show(new View.Pane({model: new Backbone.Model({title:'pl2'}),className:"col-md-3 bg3", id:"pl2"}))
                App.pane_3_region.show(new View.Pane({model: new Backbone.Model({title:'pl3'}),className:"col-md-3 bg4", id:"pl3"}))
                App.pane_4_region.show(new View.Pane({model: new Backbone.Model({title:'pl4'}),className:"col-md-3 bg5", id:"pl4"}))
            }
        }
    })
    return App.Qulij.Controller;
});

