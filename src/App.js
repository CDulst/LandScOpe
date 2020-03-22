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
import {ROUTES} from './consts/index';

const App = () => {
  return useObserver(() => (
  <>
  <Header/>
  <main className = {style.content}>
  <Switch>
  <Route path = {ROUTES.add}>
  <Add/>
  </Route>
  <Route path = {ROUTES.detail}>
  <Detail/>
  </Route>
  <Route path = {ROUTES.home}>
  <Overview/>
  </Route>
  </Switch>
  </main>
  </>
  ))
}

export default App;
