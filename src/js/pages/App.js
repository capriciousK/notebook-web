import React from 'react'
import {Route} from 'react-router-dom'
import Dashboard from '../containers/Dashboard'
import Page2 from './Page2'
import NavBar from "../components/NavBar";

const App = () =>
  <div id={"total-view-port"}>
    <NavBar/>
    <Route exact path="/" component={Dashboard}/>
    <Route exact path="/page-2" component={Page2}/>
  </div>;

export default App
