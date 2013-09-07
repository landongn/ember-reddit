App.IndexRoute = Ember.Route.extend({
    model: function () {
        App.CurrentUser.get('reddits').pushObject(
            App.SubredditService.create({
                name: 'hifw'
            })
        );
        console.log(App.CurrentUser.get('reddits'));
        return App.CurrentUser.allReddits();
    },
    setupController: function (controller, subreddit) {
        console.log(subreddit);
        controller.set('model', subreddit);
    }
});
