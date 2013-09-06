App.IndexRoute = Ember.Route.extend({
    model: function () {
        return App.SubredditService.create({name: 'reactiongifs'}).findAll();
    },
    setupController: function (controller, subreddit) {
        controller.set('content', subreddit);
    }
});
