var app = app || {};

app.TweetView = Backbone.View.extend({

    el: $('.tweets'),
    tweetsCollection: '',
    template: _.template( $('#tweet-template').html() ),


    initialize: function(){

        this.createTweetModels(); //make the fetch to the api and get tweets data.

    },

    render: function() {
        var that = this;
        _.each(tweetsCollection.models, function (tweet) { //iterate over tweet models and retrieve its attributes.
            that.$el.append( that.template( tweet.attributes ) );
        });
        return this;
    },

    createTweetModels: function() {
        var rawData = new app.TweetCollection();
        tweetsCollection = new app.TweetCollection();
        var that = this;
        rawData.fetch({
            success: function (results) {
                _.each(results.models, function (model) {
                    var tweets = model.attributes.statuses;
                    _.each(tweets, function (tweet) {
                        var tweetModel = new app.TweetModel({
                            name: tweet.user.name,
                            image: tweet.user.profile_image_url,
                            screen_name: tweet.user.screen_name,
                            created_at: tweet.created_at,
                            text : tweet.text
                        });
                        tweetsCollection.push(tweetModel);
                    });
                    that.render();
                });
            }
        });
    }

});