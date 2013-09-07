App.IndexController = Ember.ArrayController.extend({
    actions: {
        clickHeader: function () {
            this.set('content', App.CurrentUser.allReddits());
        }
    },
    hasNewReddits: function () {
        if (App.CurrentUser.get('reddits').length > 0) {
            return true;
        }
    }.property('App.CurrentUser.reddits')
});
