/* everything we define in here is custom -- none of this is 'boilerplate' ember
we are just defining an object that will be a service layer for creating SingleReddit
objects and returning them to our controllers when necessary. */

App.SubredditService = Ember.Object.extend({
    baseUrl: 'http://reddit.com/r/',
    postUrl: '/.json',
    name: null,
    /* computed properties
        here we create a basic computed property based on the above baseUrl and postUrl, as well as the name property.
        we return the computed property as a property called 'url'.
    */
    url: function () {
        return this.get('baseUrl') + this.get('name') + this.get('postUrl');
    /*
        when the computed property is finished being defined, we need to call .property() directly after
        and pass in any other elements that would invalidate this computed property.
        e.g; if baseUrl, name, or postUrl change, we need to recompute the url property.
    */
    }.property('baseUrl', 'name', 'postUrl'),


    // findall will return a promise for this subreddit, and eventually return an array of reddits for it.
    findAll: function () {
        var self = this;
        // create a promise with a resolve function and a reject function
        return new Ember.RSVP.Promise(function(resolve, reject) {

            // check our cache really fast so we don't slam reddit every time
            if (self.get('lastFetched') <= 15000) {
                return self.get('cache');
            }

            // do the ajax thing as usual, but call .then() instead of .done() or .success()
            $.getJSON(self.get('url') + '?jsonp=?').then(function(response) {
                // create an ember aware array
                var links = Em.A();
                response.data.children.forEach(function (child) {
                    // push into the array using the emberized method pushObject
                    // while using the create() method to instantiate the ember object with the properties of the data
                    links.pushObject(App.SingleReddit.create(child.data));
                });

                // update our cache once we have populated it.
                self.set('cache', links);

                // finally, resolve the promise.
                return resolve(self.get('cache'));
            });
        });
    },

    // this is our emberized array where we'll store subreddit content
    cache: Ember.A(),

    // define a computed property that listens for changes to the cache property above
    // and resets its timestamp each time cache changes.
    lastFetched: function () {
        return new Date().getTime()/1000;
    }.property('cache')
});


/* to test our class above, we'll create
a gifsReddit object, based on our service. */
var gifsReddit = App.SubredditService.create({
    name: 'gifs'
});


/* and we'll ask our service to findAll() reddits within it and return it to us as a promise.*/
gifsReddit.findAll().then(function (items) {
    console.log('reddits!', items);
});
