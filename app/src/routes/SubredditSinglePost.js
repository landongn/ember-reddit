App.SubredditPostRoute = Em.Route.extend({
	model: function (params) {
        var data = App.SinglePostService.create({subreddit: params.subreddit, id: params.id});
        return data.findAll();
	},
    setupController: function (controller, post) {
        console.log(post);
        controller.set('content', post);
    }
});
