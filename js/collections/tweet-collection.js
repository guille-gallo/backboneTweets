var TweetCollection = Backbone.Collection.extend({
   url: 'http://tweetproxy.ap01.aws.af.cm/search?q=Globant&callback=?',
   model:TweetModel

});

var tweet = new TweetCollection();

var data = tweet.fetch({

    success: function (results) {

        _.each(results.models, function (model) {

            var tweets = model.attributes.statuses;

            _.each(tweets, function (tweet) {

                   /* var name = tweet.user.name;
                    var screen_name = tweet.user.screen_name;
                    var created_at = tweet.created_at;
                    var text = tweet.text;*/

                    var pepe = new TweetModel({

                        name: tweet.user.name,
                        screen_name: tweet.user.screen_name,
                        created_at: tweet.created_at,
                        text : tweet.text
                    });



                    /*var name = tweet.user.name
                    console.log(tweet.user.screen_name);
                    console.log(tweet.created_at);
                    console.log(tweet.text);*/
            });

        });

    }

});

