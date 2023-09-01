import React from 'react';

import './App.css';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Header } from '../components/Header';
import { PostList } from '../features/PostsList/PostList';
import { FullPost } from '../features/FullPost/FullPost';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element = {< Header/>}>
    <Route path='/:category' element = {<PostList/>}/>
    <Route path='/:category/:postId' element = {<FullPost/>}/>
  </Route>
))

function App() {
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
