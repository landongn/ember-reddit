var App = window.App = Ember.Application.create();

/* Order and include as you please. */
require('src/services/*');
require('src/models/*');
require("src/routes/*");
require('src/controllers/*');
require('src/views/*');
require('src/helpers/*');
require('src/components/*');
require('src/router');


App.CurrentUser = App.UserData.create({
    username: "Anon Redditor",
    reddits: Ember.A()
});
