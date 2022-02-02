import { useContext } from 'react'
import TweetContext from './Context/TweetContext'
import Tweet from './Tweet'
import { TweetsContext } from './Context/TweetsContext'

let TweetList = () => {
    let { tweets } = useContext(TweetsContext)

    return (<div id="tweet-list">
        <h1>My Tweet List</h1>
        {tweets.map(tweet =>
            <TweetContext.Provider
                key={tweet.id}
                value={{
                    tweet: tweet
                }}
            >
                <Tweet />
            </TweetContext.Provider>
        )}
    </div>
    )
}
    

export default TweetList