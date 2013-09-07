App.IndexRoute = Ember.Route.extend({
    model: function () {
        var test = App.SubredditService.create({
                name: 'hifw'
            });
        return test.findAll();
    },
    setupController: function (controller, subreddit) {
        console.log(subreddit);
        controller.set('model', subreddit);
    }
});
