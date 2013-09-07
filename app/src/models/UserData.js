App.UserData = Ember.Object.extend({
    reddits: Ember.A(), // observable array type
    username: null,

    allReddits: function () {
        var list = Ember.A();
        var allReddits = App.CurrentUser.reddits.forEach(function(item) {
            item.findAll().then(function(data) {
                list.pushObject(App.SingleReddit.create(data));
            });
        });
        return list;
    }
});


