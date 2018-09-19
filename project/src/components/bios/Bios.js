import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import WOW from 'wowjs';

// CSS
import './bios.css';

export default class Main extends Component {
	// componentDidMount() {
	// 	new WOW.WOW({
	// 		live: false
	// 	}).init();
	// }

	render() {
		return (
			<div className="container_Main1">
				<div className="title_container">
					<div className="title1">Bios</div>
					<div className="description_container">
						<div className="description_title">Who am I?</div>
						<div className="description_context-container">
							<div className="description_context">
								<span className="description_mynameis">M</span>y name is Henry Kim.<br /> I've started
								coding when I was a student researcher in University of Alberta. I ran calculations on
								molecules through supercomputers using provided scripts
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
