import Comment from "./Comment"
import CommentAdd from "./CommentAdd"

let CommentList = ({ tweetId, comments, addCommentFn }) => (
    <div className="comment-list">
        <h3>Comments</h3>
        {comments.map(comment => 
            <Comment comment={comment} key={comment.id} />
        )}

        <CommentAdd tweetId={tweetId} 
            addCommentFn={addCommentFn} />
    </div>
)

export default CommentList