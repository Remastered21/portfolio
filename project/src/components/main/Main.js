import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import WOW from 'wowjs';

// CSS
import './main.css';

export default class Main extends Component {
	componentDidMount() {
		new WOW.WOW({
			live: false
		}).init();
	}

	render() {
		return (
			<div className="container_Main">
				<div className="title">
					<span className="title_border enlarge_border">[</span>
					<span className="title_text enlarge">
						<Typewriter
							options={{
								loop: true,
								strings: [
									'',
									'Hello!',
									'Salve!',
									'Hallo!',
									'Bonjour!',
									'Cześć!',
									'здравствуйте!',
									'Hola!',
									'مرحبا!'
								],
								delay: 'natural',
								autoStart: true,
								cursor: ''
							}}
						/>
					</span>
					<span className="blink enlarge">_</span>
					{/* <span className="blink">_</span> */}
					<span className="title_border enlarge_border">]</span>
				</div>
				<div className="subtitles">
					<div className="subtitles_pointer">
						{/* <hr className="line_1" /> */}
						<div className="subtitles_text wow fadeInDown" data-wow-delay="2s">
							My name is
							<span className="highlight_blue">
								<Typewriter
									onInit={(typewriter) => {
										typewriter
											.pauseFor(3000)
											.typeString('Henry.')
											.callFunction(() => {
												console.log('String typed out!');
											})
											.start();
									}}
								/>
							</span>
						</div>
						{/* <hr className="line_1" />	 */}
					</div>
					<div className="subtitles_pointer">
						{/* <hr className="line_1" /> */}
						<div className="subtitles_text wow fadeInDown" data-wow-delay="4s">
							I am a
							<span className="highlight_green">
								<Typewriter
									onInit={(typewriter) => {
										typewriter
											.pauseFor(5000)
											.typeString('Full-Stack Developer.')
											.callFunction(() => {
												console.log('String typed out!');
											})
											.start();
									}}
								/>
							</span>
						</div>
						{/* <hr className="line_1" /> */}
					</div>
				</div>
				<div className="button">Tell me more</div>
			</div>
		);
	}
}
