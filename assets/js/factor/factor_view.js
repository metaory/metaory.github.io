/**
 * Created by yan on 11/22/14.
 */

define(["app",

], function (App) {
    App.module("Factor.View", function (View, App, Backbone, Marionette, $, _) {

        View.AppLayout = Marionette.LayoutView.extend({
            template: _.template("<div id='app-main-region'></div>"),
            regions:{
                main_region:"#app-main-region"
            },
            initialize:function(){
                console.log("### factor_view :: initialize  :  al");
                App.factor_region.show(this)
            }
        })


        View.VideoComponent = Marionette.LayoutView.extend({
            template: _.template("<div id='com-main-region'> </div><div id='com-menu-region'> </div>"),
            regions:{
                main_component_region:"#com-main-region",
                menu_component_region:"#com-menu-region"
            },
            initialize:function(){
                new View.AppLayout().main_region.show(this);
                this.main_component_region.show(new View.VideoPlayerView({model:this.model}))
                this.menu_component_region.show(new View.VideoMenuView({model:this.model}))
            }

        })
        View.VideoPlayerView = Marionette.ItemView.extend({
            template: _.template("<span>PlayerView  <%=title%></span>")
        })
        View.VideoMenuView = Marionette.ItemView.extend({
            template: _.template("<span>MenuView <%=title%></span>")
        })

        View.MultiR = Marionette.Region.extend({
            currentView: [],

            open: function(view) {
                this.ensureEl();
                this.$el.append(view.el);
            },

            close: function(views){
                if (typeof views === "object") {
                    views = [views];
                }
                else if ( !views || !_.isArray(views)) {
                    views = this.currentView;
                }

                _.each(views, this._closeView, this);

                this._removeViews(views);
                Marionette.triggerMethod.call(this, "close", views);

                return this;
            },

            show: function(views) {
                if (typeof views === "object") {
                    views = [views];
                }
                else if ( !views || !_.isArray(views)) {
                    this.renderAll();
                    return this;
                }

                _.each(views, this._showView, this);

                this._addViews(views);
                Marionette.triggerMethod.call(this, "show", views);

                return this;
            },

            _closeView: function(view) {
                if (view.close) {
                    view.close();
                }
                else {
                    // If it doesn't have a `close` method, at least remove them from the DOM with Backbone.View's `remove`
                    view.remove();
                }

                Marionette.triggerMethod.call(this, "close", view);
            },

            _showView: function(view) {
                view.render();
                this.open(view);

                Marionette.triggerMethod.call(view, "show");
                Marionette.triggerMethod.call(this, "show", view);
            },

            _removeViews: function(views) {
                this.currentView = _.difference(this.currentView, views);
            },

            _addViews: function(views) {
                _.union(this.currentView, views);
            },

            attachView: function(view) {
                this.open(view);
                this.currentView.push(view);

                return this;
            },

            renderAll: function() {
                _.each(this.currentView, function(view){
                    view.render();
                });

                return this;
            }
        });

    });
    return App.Factor.View;
});