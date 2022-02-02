import CommentList from './CommentList'

let Tweet = ({tweet, addCommentFn}) => (
    <div className="tweet">
        <b>{tweet.by}</b><br />
        <span>{tweet.tweet}</span>

        <CommentList tweetId={tweet.id} 
            comments={tweet.comments} 
            addCommentFn={addCommentFn} />
    </div>
)

export default Tweet