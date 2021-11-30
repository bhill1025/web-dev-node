// let tweets = require('../data/tweets.json');
const dao = require('../db/tweets/tweet-dao');
module.exports = (app) => {

    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));
    // const createTweet = (req, res) => { … }
    // const deleteTweet = (req, res) => { … }
    // const likeTweet = (req, res) => { … }

    // const findAllTweets = (req, res) => {
    //     res.json(tweets);
    // }

    const postNewTweet = (req, res) => {
        const newTweet = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "avatar-image": "/images/me.jpg",
            "logo-image": "/images/me.jpg",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            "liked": false,
            ...req.body,
        }
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAA")
        dao.createTweet(newTweet)
            .then((inserted) => res.json(inserted));
    }
    const deleteTweet = (req, res) => {
        dao.deleteTweet(req.params.id)
            .then((status) => res.send(status));
        // console.log("NBDJHBDJBSJHBSJHDBJSHB")
        // const id = req.params['id'];
        // tweets = tweets.filter(tweet => tweet._id !== id);
        // res.sendStatus(200);
    }
    const likeTweet = (req, res) => {
        // const id = req.params['id'];
        // tweets = tweets.map(tweet => {
        //     if (tweet._id === id) {
        //         if (tweet.liked === true) {
        //             tweet.liked = false;
        //             tweet.stats.likes--;
        //         } else {
        //             tweet.liked = true;
        //             tweet.stats.likes++;
        //         }
        //         return tweet;
        //     } else {
        //         return tweet;
        //     }
        // });
        // res.sendStatus(200);
        console.log("NBDJHBDJBSJHBSJHDBJSHB")
        dao.updateTweet(req.params.id, req.body)
            .then(status => res.send(status));
    }
    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', postNewTweet);
    app.get('/api/tweets', findAllTweets);
};




