import "../../css/comment.css";

function Comment(props) {
  return (
    <div className="item__comment">
      <p className="item__comment__body">{props.comment.body}</p>
    </div>
  );
}

export default Comment;
