var app = app || {};

app.TweetModel = Backbone.Model.extend({
    defaults: {
        name: '',
        image:'',
        screen_name: '',
        created_at:'',
        text:''
    }
});