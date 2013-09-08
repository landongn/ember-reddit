App.IndexController = Ember.ArrayController.extend({
    actions: {
        clickHeader: function () {
            this.set('content', App.CurrentUser.allReddits());
        },
        showImage: function (image) {
            console.log(image);
        }
    }
});
