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
import Post from './components/Post/Post';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Navbar/>
       <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/post">
            <Post />
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
