let createPost = (post) => {
  let req = fetch("https://bloggy-api.herokuapp.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: post.title,
      body: post.body,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error));
  return req;
};

export default createPost;
