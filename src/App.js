import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import {useObserver} from 'mobx-react-lite';
import Detail from "./components/detail";
import Overview from "./components/overview";
import Add from "./components/add";
import {Switch,Route, BrowserRouter} from "react-router-dom";
import Header from './components/header';

const App = () => {
  return useObserver(() => (
  <>
  <Header/>
  <main className = "root content">
  <Switch>
  <Route path = "/:key">
  <Detail/>
  </Route>
  <Route path = "/">
  <Overview/>
  </Route>
  <Route path = "/Add">
  <Add/>
  </Route>
  </Switch>
  </main>
  </>
  ))
}

export default App;
