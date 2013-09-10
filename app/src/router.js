App.Router.map(function () {
    this.resource('subreddit', {path: '/'}, function () {
        this.route('list', {path: "/:reddit_id/list"});
        this.route('single', {path: "/:post_id/single"});
    });
});
