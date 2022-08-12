const updatePost = (post) => {
  let req = fetch(`https://bloggy-api.herokuapp.com/posts/${post.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: post.title,
      body: post.body,
    }),
  })
    .then((result) => result.json())
    .catch((error) => console.error("Error:", error));
  return req;
};

export default updatePost;
