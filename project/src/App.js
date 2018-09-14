import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// Components
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Route exact path="/" render={() => <Main />} />
			</div>
		);
	}
}

export default App;
