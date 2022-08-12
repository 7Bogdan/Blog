import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import getPosts from "./api/post/getPosts";
import { useDispatch } from "react-redux";
import { addPosts } from "./app/blogSlice";

import "./App.css";
import PostsList from "./components/view/postsList";
import PostView from "./components/view/postView";
import CreatePost from "./components/view/createPost";
import Home from "./components/view/home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts().then((result) => dispatch(addPosts(result)));
  });

  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="nav__list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/createPost">Create Post</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={PostsList} />
          <Route exact path="/createPost" component={CreatePost} />
          <Route
            path="/post/:id"
            render={(props) => <PostView id={props.match.params.id} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
