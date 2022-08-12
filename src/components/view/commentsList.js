import Comment from "../items/comment";
import "../../css/commentList.css";

function CommentsList(props) {
  let content = (
    <h2 className="comments__list__title"> No comments.You'll be first :) </h2>
  );

  if (props.comments.length !== 0) {
    content = (
      <>
        {" "}
        <h2 className="comments__list__title">Comments:</h2>
        {props.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </>
    );
  }

  return <div>{content}</div>;
}

export default CommentsList;
