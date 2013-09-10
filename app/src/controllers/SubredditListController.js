App.SubredditListController = Em.ArrayController.extend({
    actions: {
        showImage: function (image) {
            console.log("image for the thing", image);
        },
        showFullReddit: function (details) {
            console.log("deatils: ", details);
            this.transitionToRoute('subreddit.post', {subreddit: details.subreddit, id: details.id, data: details});
        }
    }
});
