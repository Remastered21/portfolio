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
						<div className="description_title">My name is Henry Kim.</div>
						<div className="description_context-container">
							<div className="description_context">I am a full-stack web developer.</div>
							<div className="description_context1">
								I create visaully appealing and creative UI / UX <br /> and backends for applications
								that will impact the daily lives of its users.
							</div>
							<div className="description_context2">
								and backends that will handle data with great efficacy.
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
