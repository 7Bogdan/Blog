import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../app/blogSlice";
import CreateOrUpdate from "../reusableTemplates/createOrUpdateTemplate";
import createPost from "../../api/post/createPost";
import "../../css/createPost.css";

function CreatePost() {
  let [title, setTitle] = useState("");
  let [text, setText] = useState("");
  const dispatch = useDispatch();

  let savePost = () => {
    createPost({ title: title, body: text }).then((result) =>
      addAndRestore(result)
    );
  };

  let addAndRestore = (result) => {
    setTitle("");
    setText("");
    dispatch(addPost(result));
  };

  return (
    <div className="crate__post">
      <h2 className="crate__post__title">Hello,let's save a post </h2>
      <CreateOrUpdate
        title={title}
        text={text}
        setTitle={setTitle}
        setText={setText}
      />

      <button className="crate__post__button" onClick={() => savePost()}>
        Save post
      </button>
    </div>
  );
}

export default CreatePost;
