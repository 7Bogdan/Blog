let getPosts = () => {
  return fetch("https://bloggy-api.herokuapp.com/posts")
    .then((result) => result.json())
    .catch((error) => console.error("Error:", error));
};

export default getPosts;
