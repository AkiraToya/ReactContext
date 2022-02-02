import { useContext, useRef } from "react"
import TweetContext from "./Context/TweetContext"

let CommentAdd = ({addCommentFn}) => {
    let { tweet } = useContext(TweetContext)
    let comment = useRef()

    let addComment = () => {
        addCommentFn(tweet.id, {
            id: (Math.random() * 1000).toString(),
            name: "me",
            comment: comment.current.value
        })

        comment.current.value = ""
    }

    return (
        <form onSubmit={(e) => { e.preventDefault() }}>
        <div className="comment-add">
            <input type="text" 
                placeholder="Reply Comment" 
                ref={comment} />
            <button type="submit" 
                onClick={() => { addComment() }}>
                    Reply
            </button>
        </div>
        </form>
    )
}

export default CommentAdd