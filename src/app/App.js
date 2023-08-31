import React from 'react';

import './App.css';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Header } from '../components/Header';
import { PostList } from '../features/PostsList/PostList';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element = {< Header/>}>
    <Route path='/' element = {<PostList/>}/>

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
