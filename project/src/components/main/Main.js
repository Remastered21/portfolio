import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

// CSS
import './main.css';

export default class Main extends Component {
	render() {
		return (
			<div className="container_Main">
				<div className="title">
					<span className="title_border enlarge_border">[</span>
					<span className="title_text enlarge">
						<Typewriter
							options={{
								loop: true,
								// strings: [ 'こんにちは!', 'hello'],
								strings: [
									'',
									'Hello!',
									'Salve!',
									// 'こんにちは!',
									'Hallo!',
									'Bonjour!',
									'Cześć!',
									'здравствуйте!',
									'안녕하세요!',
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
						<div className="subtitles_text animated fadeInDown delay-4s ">
							My name is
							<span className="highlight_blue">
								<Typewriter
									onInit={(typewriter) => {
										typewriter
											.pauseFor(1500)
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
						<div className="subtitles_text animated fadeInDown delay-4s">
							I am a
							<span className="highlight_green">
								<Typewriter
									onInit={(typewriter) => {
										typewriter
											.pauseFor(4000)
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
				<div className="button">Let me show you around</div>
			</div>
		);
	}
}
