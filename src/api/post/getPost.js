let getPosts = (id) => {
  let req = fetch(
    `https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments`
  )
    .then((result) => result.json())
    .catch((error) => console.error("Error:", error));
  return req;
};

export default getPosts;
