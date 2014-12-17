/**
 * Created by yan on 11/8/14.
 */

define(["app",

], function (App) {
    App.module("Qulij.View", function (View, App, Backbone, Marionette, $, _) {


        View.QuizView = Marionette.ItemView.extend({
            template: _.template("<label>quize view</label>")
        })


        View.Pane1 = Marionette.ItemView.extend({
            template: _.template("<label>pane ONE</label>"),
            className:'bg1'
        })
        View.Pane = Marionette.ItemView.extend({
            template: _.template("<label><%=title%></label> <button type='button' class='close'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button> "),
            ui:{
                close:"button.close"
            },
            events:{
                "click @ui.close":function(){
                    console.log("=== close click");
                    App.trigger('resize:layout','fold',this.model.get('title'))
                }
            }
        })

        View.ZLayout = Marionette.LayoutView.extend({
            template: _.template('<div id="az">az</div>'),
            regions:{
                a_zone:"#az"
            }
        })

    });
    return App.Qulij.View;
});