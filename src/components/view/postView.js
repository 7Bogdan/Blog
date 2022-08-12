import Post from "../items/post";
import AddComment from "../reusableTemplates/addComment";
import CommentsList from "./commentsList";

import { useState, useEffect } from "react";

import getPost from "../../api/post/getPost";
import createComment from "../../api/comment/createComment";
import "../../css/postView.css";

function PostView(props) {
  let [post, setPost] = useState({ title: "", body: "", comments: [] });
  let [comment, setComment] = useState("");

  useEffect(() => getPost(props.id).then((result) => setPost(result)), [
    props.id,
  ]);

  let sendComment = () => {
    createComment(post.id, comment)
      .then((result) => getPost(props.id))
      .then((result) => setPost(result));
    setComment("");
  };

  return (
    <div className="post__view">
      <Post post={post} />
      <div className="post__view__addComm">
        <AddComment
          comment={comment}
          setComment={setComment}
          sendComment={sendComment}
        />
      </div>
      <CommentsList comments={post.comments} />
    </div>
  );
}

export default PostView;
