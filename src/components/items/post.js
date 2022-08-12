import "../../css/post.css";

function Post(props) {
  return (
    <div>
      <h2 className="post__title">{props.post.title}</h2>
      <h3 className="post__body">{props.post.body}</h3>
    </div>
  );
}

export default Post;
