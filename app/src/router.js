App.Router.map(function () {
    this.resource('posts', {path: ":reddit_id"}, function () {
        this.resource('post', {path: ":post_id"});
    });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('posts', 'gifs');
  }
});
