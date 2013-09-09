App.UserData = Ember.Object.extend({
    // the Ember.A() (or Em.A()) shorthand creates a bindings aware array, rather than just a 'dumb' array.
    reddits: Ember.A(),
    username: null,

    /*

    */
    allReddits: function () {
        var list = Em.A();
        this.get('reddits').forEach(function(item) {
            item.findAll().then(function(data){
                list.pushObjects(data);
            });
        });
        return list.reverseObjects();
    }
});


