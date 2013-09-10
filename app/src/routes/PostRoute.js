App.PostRoute = Em.Route.extend({
	model: function (params) {
        var models = this.modelFor('posts');
        console.log(models);
        return models.findBy('id', params.post_id);
	},
    renderTemplate: function () {
        this.render('post', {outlet : "post"});
    },
    setupController: function (controller, post) {
        controller.set('content', post);
    }
});
