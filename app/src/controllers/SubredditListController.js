App.SubredditListController = Em.ArrayController.extend({
    actions: {
        showImage: function (image) {
            console.log("image for the thing", image);
        },
        showFullReddit: function (details) {
            this.set('currentSrc', this.fixImgur(details.url));
            this.set('modalShowing', true);
        },
        hideFullReddit: function () {
            this.set('modalShowing', false);
            this.set('currentSrc', '#');

        }
    },
    fixImgur: function (data) {
        var baseUrl = 'http://i.imgur.com/';
        return baseUrl + data.split('/')[data.split('/').length -1] + '.jpg';
    },
    modalShowing: false,
    currentSrc: null,
});
