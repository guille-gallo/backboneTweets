var app = app || {};

app.TweetCollection = Backbone.Collection.extend({
   url: 'http://tweetproxy.ap01.aws.af.cm/search?q=Globant&callback=?',
   model:app.TweetModel
});