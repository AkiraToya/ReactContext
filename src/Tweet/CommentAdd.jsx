import { useRef } from "react"

let CommentAdd = ({tweetId, addCommentFn}) => {
    let comment = useRef()

    let addComment = () => {
        addCommentFn(tweetId, {
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
                onClick={() => { addComment() }}>Reply</button>
        </div>
        </form>
    )
}

export default CommentAdd