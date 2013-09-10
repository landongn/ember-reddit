App.SubredditListRoute = Em.Route.extend({
    model: function (params) {
        console.log(params);
        var data = App.SubredditService.create({name: params.reddit_id});
        return data.findAll();
    },
    setupController: function (controller, reddits) {
        controller.set('content', reddits);
    },
    renderTemplate: function () {
        this.render('subredditlist');
    }
});
