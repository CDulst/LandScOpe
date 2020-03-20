import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useObserver} from 'mobx-react-lite';
import Detail from "./components/Detail/Detail";
import Overview from "./components/Overview/Overview";
import Add from "./components/Add/Add";
import {Switch,Route, BrowserRouter} from "react-router-dom";
import Header from './components/Header/Header';
import style from './app.module.css';

const App = () => {
  return useObserver(() => (
  <>
  <Header/>
  <main className = {style.content}>
  <Switch>
  <Route path = "/Add">
  <Add/>
  </Route>
  <Route path = "/:key">
  <Detail/>
  </Route>
  <Route path = "/">
  <Overview/>
  </Route>
  </Switch>
  </main>
  </>
  ))
}

export default App;
