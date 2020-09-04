import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <Router>
      <Navbar/>
       <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/post/:id">
            <PostDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
