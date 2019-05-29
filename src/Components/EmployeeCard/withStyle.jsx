import styled from 'styled-components';

export default component => styled(component)`
	.card {
		border-radius: 0px;
		min-height: 200px;
		min-width: 200px;
		display: flex;
		background: white;
		flex-direction: column;
	}

	.media {
		position: absolute;
		background-size: cover;
		z-index: 10;
		height: 200px;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		transition: top 300ms ease-out, left 300ms ease-out, bottom 300ms ease-out,
			right 300ms ease-out;
	}

	.details {
		font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode',
			'Lucida Sans', sans-serif;
		min-height: 200px;
		min-width: 200px;
		border: 1px solid white;
	}

	.details > h4 {
		font-size: 20px;
		padding: 0 11px 0 11px;
		color: #22296b;
	}

	.details > p {
		font-size: 13px;
		padding: 0 11px 0 11px;
		color: #7f7f87;
	}
	.check-box {
		padding: 1px;
	}

	.name-enter {
		opacity: 0.8;
		transform: translateX(-20px);
	}
	.name-enter-active {
		opacity: 1;
		transform: translateX(100%);
		transition: all 2000ms ease-in;
	}
	.name-exit {
		opacity: 0.01;
		transform: translateX(100%);
	}
	.name-exit-active {
		opacity: 0.01;
		transform: translateX(50%);
		transition: all 3000ms ease-in;
	}

	figure.snip1104 {
		font-family: 'Raleway', Arial, sans-serif;
		position: relative;
		margin: 5px;
		min-width: 100px;
		max-width: 100%;
		max-height: 220px;
		width: 100%;
		background: #000000;
		color: #ffffff;
		text-align: center;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	}

	figure.snip1104 * {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-transition: all 0.4s ease-in-out;
		transition: all 0.4s ease-in-out;
	}

	figure.snip1104 figcaption {
		position: absolute;
		top: 115px;
		left: 30px;
		bottom: 10px;
		right: 0;
		width: 100%;
	}

	figure.snip1104 h2 {
		position: absolute;
		width: 80%;
		left: 110%;
		z-index: 20000;
		display: inline-block;
		background: #000000;
		-webkit-transform: skew(-10deg) rotate(-10deg) translate(0, -50%);
		transform: skew(-10deg) rotate(-10deg) translate(0, -50%);
		padding: 12px 5px;
		margin: 0;
		text-transform: uppercase;
		font-size: 16px;
		font-weight: 500;
		opacity: 1;
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}

	figure.snip1104 h2 span {
		font-weight: 800;
	}

	figure.snip1104:before {
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		content: '';
		background: #ffffff;
		position: absolute;
		-webkit-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
		-webkit-transform: rotate(110deg) translateY(-50%);
		transform: rotate(110deg) translateY(-50%);
	}

	figure.snip1104:hover img,
	figure.snip1104.hover img {
		opacity: 1;
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}

	figure.snip1104:hover h2,
	figure.snip1104.hover h2 {
		-webkit-transform: skew(-10deg) rotate(-10deg) translate(-150%, -50%);
		transform: skew(-10deg) rotate(-10deg) translate(-150%, -50%);
	}

	figure.snip1104:hover:before,
	figure.snip1104.hover:before {
		-webkit-transform: rotate(110deg) translateY(-150%);
		transform: rotate(110deg) translateY(-150%);
	}

	.typed-text {
		color: #8ca609;
		opacity: 0.5;
		float: left;
		margin-left: 5%;
		max-width: 50%;
		margin-top: 10%;
		font-family: zig;
	}
	.header {
		flex-grow: 0;
		max-width: 100%;
		background-image: linear-gradient(#1d1d1d, #1c1c1c);
		padding: 0 !important;
		box-shadow: 0 8px 6px -6px black;
	}

	.container {
		background-color: rgba(0, 1, 0, 0.8);
		margin-top: 10px;
		margin-bottom: 10px;
		position: relative;
		color: white;
		box-shadow: 0 8px 6px -6px black;
	}

	.top-border {
		border-left: 5px solid #546113;
		width: 80px;
		border-top: 5px solid #546113;
		height: 80px;
		top: 3px;
		position: absolute;
		left: 3px;
	}

	.bottom-border {
		border-right: 5px solid #546113;
		width: 80px;
		border-bottom: 5px solid #546113;
		height: 80px;
		bottom: 3px;
		position: absolute;
		right: 3px;
	}
`;
