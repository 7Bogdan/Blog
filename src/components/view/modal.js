import CreateOrUpdate from "../reusableTemplates/createOrUpdateTemplate";
import { useDispatch } from "react-redux";
import { editPost } from "../../app/blogSlice";

import { useState, useEffect } from "react";
import getPost from "../../api/post/getPost";
import updatePost from "../../api/post/updatePost";
import "../../css/modal.css";

function Modal({ active, setActive, id }) {
  let [title, setTitle] = useState("");
  let [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (id !== undefined) {
      getPost(id).then((result) => {
        setTitle(result.title);
        setText(result.body);
      });
    }
  }, [id]);

  let update = () => {
    updatePost({ id: id, title: title, body: text }).then((result) =>
      dispatch(editPost(result))
    );
    setActive(!active);
  };

  return (
    <div className={active ? "modal active" : "modal"}>
      <div className="modal__edit">
        <CreateOrUpdate
          title={title}
          text={text}
          setTitle={setTitle}
          setText={setText}
        />
        <button
          className="modal__edit__button"
          onClick={() => setActive(!active)}
        >
          Close
        </button>
        <button className="modal__edit__button" onClick={() => update()}>
          Save post
        </button>
      </div>
    </div>
  );
}

export default Modal;
