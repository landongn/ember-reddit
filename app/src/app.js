var App = window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_ACTIVE_GENERATION: true
});

/* Order and include as you please. */
require('src/services/*');
require('src/models/*');
require("src/routes/*");
require('src/controllers/*');
require('src/views/*');
require('src/helpers/*');
require('src/components/*');
require('src/router');

