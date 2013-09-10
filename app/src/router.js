App.Router.map(function () {
    this.resource('subreddit', {path: '/'}, function () {
        this.route('post', {path: "/view/:subreddit/:permalink/:post_id/"});
        this.route('list', {path: "/list/:reddit_id/"}, function () {});
    });
});
