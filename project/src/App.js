import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Bios from './components/bios/Bios';
import Projects from './components/projects/Projects';
import Stacks from './components/stacks/Stacks';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Main />
				<Bios />
				<Projects />
				<Stacks />
			</div>
		);
	}
}

export default App;
