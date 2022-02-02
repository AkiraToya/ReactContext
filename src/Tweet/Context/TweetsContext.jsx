import { createContext, useState } from "react";
import { tweetsData } from './../../Data/tweets';

export let TweetsContext = createContext();

let TweetsProvider = ({children}) => {
    let [tweets, setTweets] = useState(tweetsData)

    let addCommentFn = (tweetId, comment) => {
        let newTweets = tweets.map(tweet => {
            if (tweet.id === tweetId) {
                tweet.comments = [...tweet.comments, comment]
            }
            return tweet
        })

        setTweets(newTweets)
    }

    return (
        <TweetsContext.Provider
            value={{
                tweets: tweets,
                addCommentFn: addCommentFn
            }}
        >
            { children }
        </TweetsContext.Provider>
    )
}

export default TweetsProvider