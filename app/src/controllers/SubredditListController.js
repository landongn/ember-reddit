App.SubredditListController = Ember.ArrayController.extend({
    // define the actions this controller can handle via the actions hash
    actions: {
        // when an object that this controller 'controls' is clicked on, it'll
        // call this method passing in any parameters.
        showFullReddit: function (details) {
            this.set('currentSrc', this.fixImgur(details.url));
            this.set('modalShowing', true);
        },
        // same things as above, just reversed.
        hideFullReddit: function () {
            this.set('modalShowing', false);
            this.set('currentSrc', '#');
        }
    },

    // handle people not posting a direct link to imgur.
    fixImgur: function (data) {
        var baseUrl = 'http://i.imgur.com/';
        return baseUrl + data.split('/')[data.split('/').length -1] + '.jpg';
    },

    // databound properties.

    // modalShowing turns into modal-showing as a class name when bound via bind-attr
    modalShowing: false,
    currentSrc: null,
});
