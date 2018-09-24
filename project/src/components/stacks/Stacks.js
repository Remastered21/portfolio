import React, { Component } from 'react';
import WOW from 'wowjs';
import anime from 'animejs';

import './stacks.css';

export default class Stacks extends Component {
	componentDidMount() {
		new WOW.WOW({
			live: false,
			callback: function(box) {
				anime
					.timeline({ loop: false })
					.add({
						targets: '.ml5 .line',
						opacity: [ 0.5, 1 ],
						scaleX: [ 0, 1 ],
						easing: 'easeInOutExpo',
						duration: 700
					})
					.add({
						targets: '.ml5 .line',
						duration: 600,
						easing: 'easeOutExpo',
						translateY: function(e, i, l) {
							var offset = -0.625 + 0.625 * 2 * i;
							return offset + 'em';
						}
					})
					.add({
						targets: '.ml5 .ampersand',
						opacity: [ 0, 1 ],
						scaleY: [ 0.5, 1 ],
						easing: 'easeOutExpo',
						duration: 600,
						offset: '-=600'
					})
					.add({
						targets: '.ml5 .letters-left',
						opacity: [ 0, 1 ],
						translateX: [ '0.5em', 0 ],
						easing: 'easeOutExpo',
						duration: 600,
						offset: '-=300'
					})
					.add({
						targets: '.ml5 .letters-right',
						opacity: [ 0, 1 ],
						translateX: [ '-0.5em', 0 ],
						easing: 'easeOutExpo',
						duration: 600,
						offset: '-=600'
					});
			}
		}).init();
	}

	render() {
		return (
			<div className="container_stack">
				<div className="title_stack">
					<h1 class="ml5 wow">
						<span class="text-wrapper">
							<span class="line line1" />
							<span class="letters letters-left">Stacks</span>
							<span class="letters ampersand">&amp;</span>
							<span class="letters letters-right">Skillset</span>
							<span class="line line2" />
						</span>
					</h1>
				</div>

				<div className="stack_main">
					<div className="stack_main-front">Front End stuff will be written here</div>
					<div className="stack_main-back">Back End stuff will be written here</div>
				</div>
			</div>
		);
	}
}
