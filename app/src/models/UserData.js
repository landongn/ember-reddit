App.UserData = Ember.Object.extend({
    reddits: Ember.A(), // observable array type
    username: null
});

App.CurrentUser = App.UserData.create({
    username: "Anon Redditor"
});
