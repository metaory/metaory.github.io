/**
 * Created by yan on 11/29/13.
 */
define(["app",
    "tpl!templates/common/loading.tpl"

], function (App,LoadingTpl) {
    App.module("Common.View", function (View, App, Backbone, Marionette, $, _) {


        //<editor-fold desc="Loading View">
        View.LoadingView = Marionette.ItemView.extend({
            template: LoadingTpl,
            onShow: function () {
                var opts = {
                    lines: 10, // The number of lines to draw
                    length: 4, // The length of each line
                    width: 5, // The line thickness
                    radius: 20, // The radius of the inner circle
                    corners: 1, // Corner roundness (0..1)
                    rotate: 0, // The rotation offset
                    direction: 1, // 1: clockwise, -1: counterclockwise
                    color: '#A1A1A1', // #rgb or #rrggbb or array of colors
                    speed: 4, // Rounds per second
                    trail: 100, // Afterglow percentage
                    shadow: false, // Whether to render a shadow
                    hwaccel: false, // Whether to use hardware acceleration
                    className: 'spinner', // The CSS class to assign to the spinner
                    zIndex: 2e9, // The z-index (defaults to 2000000000)
                    top: 'auto', // Top position relative to parent in px
                    left: 'auto' // Left position relative to parent in px
                };
                this.$("#spinner").spin(opts);
            }
        });
        //</editor-fold>


    });
    return App.Common.View;
});
