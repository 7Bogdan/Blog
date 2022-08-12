import "../../css/addComment.css";

function AddComment(props) {
  return (
    <div className="add__comment">
      <label className="add__comment__label">
        Your comment {""}
        <input
          className="add__comment__input"
          value={props.comment}
          name="comment"
          onChange={(event) => props.setComment(event.target.value)}
        />
      </label>
      <button
        className="add__comment__button"
        onClick={() => props.sendComment()}
      >
        Send
      </button>
    </div>
  );
}

export default AddComment;
