App.UserData = Ember.Object.extend({
    reddits: Ember.A(), // observable array type
    username: null,

    allReddits: function () {
        var list = Em.A();
        this.get('reddits').forEach(function(item) {
            list.pushObjects(item.get('cache'));
        });
        console.log(list);
        return list;
    }
});


