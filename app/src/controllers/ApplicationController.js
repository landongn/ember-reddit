App.ApplicationController = Ember.ObjectController.extend({
    addSubreddit: null,
    needs: ['index'],
    actions: {
        addNewSubreddit: function (params) {
            var newReddit = App.SubredditService.create({name: params});
            newReddit.findAll();
            App.CurrentUser.get('reddits').pushObject(newReddit);
            this.get('controllers.index').set('model', App.CurrentUser.allReddits());
        }
    }
});
