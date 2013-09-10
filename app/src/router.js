App.Router.map(function () {
    this.resource('subreddit', {path: '/'}, function () {
        this.route('list', {path: "/list/:reddit_id/"}, function () {});
    });
});
