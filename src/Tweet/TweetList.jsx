import TweetContext from './Context/TweetContext'
import Tweet from './Tweet'

let TweetList = ({ tweets, addCommentFn }) => (
    <div id="tweet-list">
        <h1>My Tweet List</h1>
        {tweets.map(tweet => 
            <TweetContext.Provider 
                key={tweet.id}
                value={{
                    tweet: tweet
                }}
            >
                <Tweet addCommentFn={addCommentFn} />
            </TweetContext.Provider>
        )}
    </div>
)

export default TweetList