let createComment = (postId, comment) => {
  let req = fetch("https://bloggy-api.herokuapp.com/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      postId: postId,
      body: comment,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error));
  return req;
};

export default createComment;
