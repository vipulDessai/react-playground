import React from 'react';
import { Redirect, Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import { PostsComponent } from './Posts';
import {HomeComponent} from './Home';
import { CLassyComponent } from './ClassyComponent/ClassyComponent';
import { FunctionalComponent } from './FunctioningComponent/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/classy">Classy</Link>
      <Link to="/functional">Functional</Link>
      <Switch>
        <Route exact path="/" component={HomeComponent}></Route>
        <Route path="/posts" component={PostsComponent}></Route>
        <Route path="/classy" component={() => <CLassyComponent foo={'foo'} />}></Route>
        <Route path="/functional" component={() => <FunctionalComponent foo={'foo'} />}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
