/* everything we define in here is custom -- none of this is 'boilerplate' ember
we are just defining an object that will be a service layer for creating SinglePost
objects and returning them to our controllers when necessary. */

App.SinglePostService = Ember.Object.extend({
    baseUrl: 'http://www.reddit.com/r/',
    postUrl: '/.json',
    subreddit: null,
    permalink: null,
    id: null,
    /* computed properties
        here we create a basic computed property based on the above baseUrl and postUrl, as well as the name property.
        we return the computed property as a property called 'url'.
    */
    url: function () {
        return this.get('baseUrl') + this.get('subreddit') + '/comments/' + this.get('id') + '/' + this.get('permalink') + this.get('postUrl');
    /*
        when the computed property is finished being defined, we need to call .property() directly after
        and pass in any other elements that would invalidate this computed property.
        e.g; if baseUrl, name, or postUrl change, we need to recompute the url property.
    */
    }.property('baseUrl', 'name', 'postUrl'),


    // findall will return a promise for this subreddit, and eventually return an array of reddits for it.
    findAll: function () {
        var self = this;
        this.set('cache', Ember.A());
        console.log('url is', this.get('url'));
        console.log('fetching singleposts');
        // create a promise with a resolve function and a reject function
        return new Ember.RSVP.Promise(function(resolve, reject) {
            console.log('checking cache');
            // check our cache really fast so we don't slam reddit every time
            console.log('cache passed');

            // do the ajax thing as usual, but call .then() instead of .done() or .success()
            Ember.$.getJSON(self.get('url') + '?jsonp=?').then(function(response) {
                // create an ember aware array
                var list = Ember.A();
                response.forEach(function (section) {
                    section.data.children.forEach(function (data) {
                        if (data.kind === 't3') {
                            list.pushObject(App.SinglePost.create(data.data));
                        } else {
                            list.pushObject(App.Comment.create(data.data));
                        }
                    });
                });

                self.set('cache', list);

                // finally, resolve the promise.
                return resolve(self.get('cache'));
            });
        });
    },

    cache: Ember.A(),
    // this is our emberized array where we'll store subreddit content
    // define a computed property that listens for changes to the cache property above
    // and resets its timestamp each time cache changes.
    lastFetched: function () {
        return new Date().getTime()/1000;
    }.property('cache')
});


/* to test our class above, we'll create
a gifsReddit object, based on our service. */
// var gifsReddit = App.SubredditService.create({
//     name: 'reactiongifs'
// });


/* and we'll ask our service to findAll() reddits within it and return it to us as a promise.*/
// gifsReddit.findAll().then(function (items) {
//     console.log('reddits!', items);
// });
