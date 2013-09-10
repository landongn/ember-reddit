App.SubredditPostRoute = Em.Route.extend({
	model: function (params) {
        var data = App.SinglePostService.create({subreddit: params.subreddit, id: params.post_id, permalink: params.permalink});
        return data.findAll();
	},
    setupController: function (controller, postData) {
        console.log('controller', controller);
        controller.set('content', postData);
    },
    renderTemplate: function () {
        this.render("subreddit-post");
    }
});
