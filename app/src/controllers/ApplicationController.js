App.ApplicationController = Ember.ObjectController.extend({

    // all controller level events should be bound to a function in the actions hash.
    actions: {
        // this action is invoked on 'submit' of the textbox in the application template.
        addNewSubreddit: function (params) {
            // first we tell the subreddit service to create a new instance of a subreddit passing in the name of the property
            // we bound in the textbox's value attribute.
            this.transitionToRoute('subreddit.list', params);

            // finally, clear out the search box's value through the magic of two way bindings.
            this.set('newRedditString', '');
        }
    },

    // this property is used to data bind the text box value.
    newRedditString: ''
});
