App.Subreddit = Ember.Object.extend({
    baseUrl: 'http://reddit.com/r/',
    postUrl: '/.json',
    name: '',
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
        return new Ember.RSVP.Promise(function(resolve, reject) {
            $.getJSON(self.get('url') + '?jsonp=?').then(function(response) {
                var links = Em.A();
                response.data.children.forEach(function (child) {
                    links.pushObject(App.SingleReddit.create(child.data));
                });
                return resolve(links);
            });
        });
    }
});

// test junk, not really used, just an example.
var gifsReddit = App.Subreddit.create({
    name: 'gifs'
});

gifsReddit.findAll().then(function (items) {
    console.log('reddits!', items);
});
