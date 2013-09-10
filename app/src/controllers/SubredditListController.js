App.SubredditListController = Em.ArrayController.extend({
    actions: {
        showImage: function (image) {
            console.log("image for the thing", image);
        },
        showFullReddit: function (details) {
            var the_stub = details.permalink.split('/')[5];
            the_stub.replace("'", "");
            the_stub.replace(" ", "_");
            this.transitionToRoute('subreddit.post', {subreddit: details.subreddit, permalink: the_stub, post_id: details.id});
        }
    }
});
