App.Router.map(function () {
    this.resource('subreddit', {path: '/'}, function () {
        this.route('list', {path: "/:reddit_id/"});
        this.route('post', {path: "/:subreddit/:post_id/"});
    });
});
