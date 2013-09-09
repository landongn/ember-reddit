App.UserData = Ember.Object.extend({
    // the Ember.A() (or Em.A()) shorthand creates a bindings aware array, rather than just a 'dumb' array.
    reddits: Ember.A(),
    username: null,

    /*
        allReddits() returns all subreddit data to the client for rendering by
        iterating through all of the subscribed reddits of the current session
        and return them as an ember array.
    */
    allReddits: function () {
        // create an ember array for containing all the final posts
        var list = Em.A();

        //iterate through the current users reddit array
        this.get('reddits').forEach(function(item) {
            // create a promise for each of the individual subreddit's posts
            item.findAll().then(function(data){
                // and then add them to the ember array
                list.pushObjects(data);
            });
        });
        // then we return the list in reverse so that the most recently added is at the beginning
        return list.reverseObjects();
    }
});


