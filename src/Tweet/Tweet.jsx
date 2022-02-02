import { useContext } from 'react'
import CommentList from './CommentList'
import TweetContext from './Context/TweetContext'

let Tweet = ({addCommentFn}) => {
    let { tweet } = useContext(TweetContext)
    return (
        <div className="tweet">
            <b>{tweet.by}</b><br />
            <span>{tweet.tweet}</span>

            <CommentList addCommentFn={addCommentFn} />
        </div>
    )
}

export default Tweet