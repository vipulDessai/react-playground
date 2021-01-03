import React from 'react';
import { Redirect, Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import { PostsComponent } from './Posts';
import {HomeComponent} from './Home';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/">Posts</Link>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeComponent}></Route>
        <Route path="/posts" component={PostsComponent}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
