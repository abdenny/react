import React from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Calculator from "./components/Calculator";
import Home from "./components/Home"
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div className="nav">
					<ul>
						<Link to="/"><li>Home</li></Link>
						<Link to="/calculator"><li>Calculator</li></Link>
					</ul>
				</div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/calculator" component={Calculator}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
