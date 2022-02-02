import { useContext } from "react"
import Comment from "./Comment"
import CommentAdd from "./CommentAdd"
import TweetContext from "./Context/TweetContext"

let CommentList = () => {
    let { tweet } = useContext(TweetContext)
    let comments = tweet.comments

    return (
        <div className="comment-list">
            <h3>Comments</h3>
            {comments.map(comment =>
                <Comment comment={comment} key={comment.id} />
            )}

            <CommentAdd />
        </div>
    )
}
    

export default CommentList