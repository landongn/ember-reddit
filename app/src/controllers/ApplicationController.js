App.ApplicationController = Ember.ObjectController.extend({
    addSubreddit: null,
    needs: ['index'],
    actions: {
        addNewSubreddit: function (params) {
            App.CurrentUser.get('reddits').pushObject(
                App.SubredditService.create({name: params})
            );

            var list = Ember.A();
            var allReddits = App.CurrentUser.reddits.forEach(function(item) {
                console.log(item);
                item.findAll().then(function(data) {
                    list.pushObject(App.SingleReddit.create(data));
                });
            });
            this.get('controllers.index').set('model', list);
        }
    }
});
