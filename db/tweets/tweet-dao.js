const model = require('./tweet-model');

const findAllTweets = () => model.find();
const createTweet = (tweet) => model.create(tweet);;
const deleteTweet = (id) => model.deleteOne({ _id: id });
const updateTweet = (id, tweet) => {
    model.findOne({_id: id}, function(err, subjects){
        if (err) throw err;

        let val = !subjects.liked
        let up = subjects.stats.likes + 1
        let down = subjects.stats.likes - 1
        console.log(up)
        if (val) {
            model.updateOne({_id: id},
                {$set: {"liked": val, "stats.likes": up}}).then(res => console.log(res));
        } else {
            model.updateOne({_id: id},
                {$set: {"liked": val, "stats.likes": down}}).then(res => console.log(res));
        }
    })
}
module.exports = {
    findAllTweets, createTweet,
    deleteTweet, updateTweet
};
