App.UserData = Ember.Object.extend({
    reddits: Ember.A(), // observable array type
    username: null,
    allReddits: function () {
        var list = Em.A();
        this.get('reddits').forEach(function(item) {
            item.findAll().then(function(data){
                list.pushObjects(data);
            });
        });
        return list;
    }
});


