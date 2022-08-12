import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    value: {},
  },
  reducers: {
    addPosts: (state, posts) => {
      let tmpPosts = posts.payload;
      tmpPosts.forEach((post) => {
        state.value[post.id] = post;
      });
    },

    addPost: (state, post) => {
      let tmpPost = post.payload;
      state.value[tmpPost.id] = tmpPost;
    },

    editPost: (state, post) => {
      let tmpPost = post.payload;
      state.value[tmpPost.id] = tmpPost;
    },

    removePost: (state, post) => {
      let id = post.payload;
      delete state.value[id];
    },
  },
});

export const { addPost, addPosts, editPost, removePost } = blogSlice.actions;

export const selectBlog = (state) => state.blog.value;

export default blogSlice.reducer;
