import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,  // Ajouter le reducer des posts
  },
});

export default store;
