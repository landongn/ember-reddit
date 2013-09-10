App.SubredditPostController = Em.ArrayController.extend({
    actions: {
        logEverything: function (){
            console.log(this.get('model'));
        }
    }
});
