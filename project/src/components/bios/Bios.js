import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import WOW from 'wowjs';
import anime from 'animejs';

// CSS
import './bios.css';

export default class Main extends Component {
	componentDidMount() {
		new WOW.WOW({
			live: false,
			callback: function(box) {
				anime
					.timeline({ loop: true })
					.add({
						targets: '.ml10 .letter',
						rotateY: [ -90, 0 ],
						duration: 1300,
						delay: function(el, i) {
							return 45 * i;
						}
					})
					.add({
						targets: '.ml10',
						opacity: 0,
						duration: 1000,
						easing: 'easeOutExpo',
						delay: 1000
					});
			}
		}).init();
	}

	render() {
		return (
			<div className="container_Main1">
				<div className="title_container">
					<div className="title1">Bio</div>
					<div className="description_container">
						<h1 className="ml10 wow" data-wow-delay="1s">
							<span className="text-wrapper">
								<span className="letters">H</span>
								<span className="letters">E</span>
								<span className="letters">N</span>
								<span className="letters">R</span>
								<span className="letters">Y </span>
								<span className="letters">K</span>
								<span className="letters">I</span>
								<span className="letters">M</span>
							</span>
						</h1>

						<img
							className="placeholder"
							src="http://www.absoluteeventmanagement.com/wp-content/uploads/2018/06/person-placeholder.jpg"
							alt="Smiley face"
						/>
						<div className="description_context-container">
							<div className="description_context">
								<span className="description_mynameis">M</span>y name is Henry Kim.<br /> I've started
								coding when I was a student researcher in University of Alberta. I ran calculations on
								molecules through supercomputers using provided scripts
							</div>
						</div>
					</div>
				</div>

				<div />
			</div>
		);
	}
}
