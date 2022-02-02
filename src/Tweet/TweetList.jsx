import Tweet from './Tweet'

let TweetList = ({ tweets, addCommentFn }) => (
    <div id="tweet-list">
        <h1>My Tweet List</h1>
        {tweets.map(tweet => 
            <Tweet tweet={tweet} 
                key={tweet.id} 
                addCommentFn={addCommentFn} />
        )}
    </div>
)

export default TweetList