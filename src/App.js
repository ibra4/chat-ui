import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style/style.scss'

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomeIndex from './scenes/Home/HomeIndex';
import ChatIndex from './scenes/Chat/ChatIndex';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeIndex} />
        <Route path="/chat" component={ChatIndex} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
