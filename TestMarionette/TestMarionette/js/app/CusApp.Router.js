var CusApp = CusApp || {};

(function () {
    CusApp.Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            '*filter': 'filterItems'
        }
    });

    CusApp.Controller = Backbone.Marionette.Object.extend({
        initialize: function () {
            this.cusList = new CusApp.cusList();
        },
        start: function () {
            this.showRootLayout(this.cusList);
            this.showFooter(this.cusList);
            this.showcusList(this.cusList);
            this.cusList.on('all', this.updateHiddenElements, this);
            this.cusList.fetch();
        },
        updateHiddenElements: function () {
            $('#main, #footer').toggle(!!this.cusList.length);
        },

        showRootLayout: function (cusList) {
            var header = new TodoMVC.HeaderLayout({
                collection: cusList
            });
            TodoMVC.App.root.showChildView('header', header);
        },
        showcusList: function (cusList) {
            TodoMVC.App.root.showChildView('main', new TodoMVC.ListView({
                collection: cusList
            }));
        },

        // Set the filter to show complete or all items
        filterItems: function (filter) {
            var newFilter = filter && filter.trim() || 'all';
            filterChannel.request('filterState').set('filter', newFilter);
        }
    });
})();