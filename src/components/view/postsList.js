import deletePost from "../../api/post/deletePost";
import { removePost, selectBlog } from "../../app/blogSlice";

import Modal from "./modal";
import Post from "../items/post";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../css/postsList.css";

function PostsList() {
  const blogs = useSelector(selectBlog);
  const dispatch = useDispatch();
  let [modalActive, setModalActive] = useState(false);

  let [post, setPost] = useState("");

  let remove = (id) => {
    deletePost(id).then(() => dispatch(removePost(id)));
  };

  let edit = (id) => {
    setPost(blogs[id]);
    setModalActive(!modalActive);
  };

  return (
    <div>
      {Object.values(blogs).map((post) => (
        <div key={post.id} className="posts__item">
          <Post post={post} />
          <Link to={`post/${post.id}`}>
            <h4>more</h4>
          </Link>
          <button
            className="posts__item__button"
            onClick={() => remove(post.id)}
          >
            Delete
          </button>
          <button className="posts__item__button" onClick={() => edit(post.id)}>
            Edit
          </button>
        </div>
      ))}
      <Modal active={modalActive} setActive={setModalActive} id={post.id} />
    </div>
  );
}

export default PostsList;
