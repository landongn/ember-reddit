App.ApplicationController = Ember.ObjectController.extend({
    //tell ember we need to 'require' the IndexController in this controller.
    needs: ['index'],

    // all controller level events should be bound to a function in the actions hash.
    actions: {
        // this action is invoked on 'submit' of the textbox in the application template.
        addNewSubreddit: function (params) {
            // first we tell the subreddit service to create a new instance of a subreddit passing in the name of the property
            // we bound in the textbox's value attribute.
            var newReddit = App.SubredditService.create({name: this.get('newRedditString')});
            // we could actually use the params object's value since it was defined in the action template as a parameter
            // but in this case we're just using the bound property so we can easily clear out the value upon submission.

            // ask the reddit service to return all of it's data into it's cache.
            newReddit.findAll();

            // update the current users reddits array with the service object containing the posts.
            App.CurrentUser.get('reddits').pushObject(newReddit);

            // apply the new model data into the controller for the index route (since that's where we're rendering by default.)
            this.get('controllers.index').set('model', App.CurrentUser.allReddits());

            // finally, clear out the search box's value through the magic of two way bindings.
            this.set('newRedditString', '');
        }
    },

    // this property is used to data bind the text box value.
    newRedditString: ''
});
