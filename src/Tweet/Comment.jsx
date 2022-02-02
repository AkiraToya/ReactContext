let Comment = ({comment}) => (
    <div className="comment">
        <b>{comment.name}</b><br />
        <span>{comment.comment}</span>
    </div>
)

export default Comment