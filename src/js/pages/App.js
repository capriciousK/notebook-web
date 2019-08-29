import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Home'
import Page2 from './Page2'
import Header from "../components/Header";

const App = () =>
	<div id={"total-view-port"}>
		<Header />
		<Route exact path="/" component={Home}/>
		<Route exact path="/page-2" component={Page2}/>
	</div>


export default App
