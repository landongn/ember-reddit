App.PostsRoute = Em.Route.extend({
    service : null,
    model: function (params) {
        this.service = App.PostsService.create({name: params.reddit_id});
        return this.service.findAll();
    },
    setupController: function (controller, reddits) {
        controller.set('content', reddits);
    },
    renderTemplate: function () {
        this.render('posts', {outlet : "posts"});
    },
    willTransition: function () {
        console.log('will transition');
    }
});
