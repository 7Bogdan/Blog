const deletePost = (id) => {
  let req = fetch(`https://bloggy-api.herokuapp.com/posts/${id}`, {
    method: "DELETE",
    contentType: "application/json",
  }).catch((error) => console.error("Error:", error));
  return req;
};

export default deletePost;
