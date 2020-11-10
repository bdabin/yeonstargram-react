import React from 'react';
import styled from 'styled-components';

const InnerImg = styled.div`
	width: 100%;
	padding-bottom: 100%;
	background-image: url(${(props) => props.src});
	background-size: cover;
	background-position: center;
	/* vertical-align: top; */
`;

const FilterBox = styled.div`
	/*======================================= 필터 ==================================================================*/
	.aden {
		-webkit-filter: hue-rotate(-20deg) contrast(0.9) saturate(0.85) brightness(1.2);
		filter: hue-rotate(-20deg) contrast(0.9) saturate(0.85) brightness(1.2);
	}
	.aden::after {
		background: -webkit-linear-gradient(left, rgba(66, 10, 14, 0.2), transparent);
		background: linear-gradient(to right, rgba(66, 10, 14, 0.2), transparent);
		mix-blend-mode: darken;
	}
	.perpetua::after,
	.reyes::after {
		mix-blend-mode: soft-light;
		opacity: 0.5;
	}
	.inkwell {
		-webkit-filter: sepia(0.3) contrast(1.1) brightness(1.1) grayscale(1);
		filter: sepia(0.3) contrast(1.1) brightness(1.1) grayscale(1);
	}
	.perpetua::after {
		background: -webkit-linear-gradient(top, #005b9a, #e6c13d);
		background: linear-gradient(to bottom, #005b9a, #e6c13d);
	}
	.reyes {
		-webkit-filter: sepia(0.22) brightness(1.1) contrast(0.85) saturate(0.75);
		filter: sepia(0.22) brightness(1.1) contrast(0.85) saturate(0.75);
	}
	.reyes::after {
		background: #efcdad;
	}
	.gingham {
		-webkit-filter: brightness(1.05) hue-rotate(-10deg);
		filter: brightness(1.05) hue-rotate(-10deg);
	}
	.gingham::after {
		background: -webkit-linear-gradient(left, rgba(66, 10, 14, 0.2), transparent);
		background: linear-gradient(to right, rgba(66, 10, 14, 0.2), transparent);
		mix-blend-mode: darken;
	}
	.toaster {
		-webkit-filter: contrast(1.5) brightness(0.9);
		filter: contrast(1.5) brightness(0.9);
	}
	.toaster::after {
		background: -webkit-radial-gradient(circle, #804e0f, #3b003b);
		background: radial-gradient(circle, #804e0f, #3b003b);
		mix-blend-mode: screen;
	}
	.walden {
		-webkit-filter: brightness(1.1) hue-rotate(-10deg) sepia(0.3) saturate(1.6);
		filter: brightness(1.1) hue-rotate(-10deg) sepia(0.3) saturate(1.6);
	}
	.walden::after {
		background: #04c;
		mix-blend-mode: screen;
		opacity: 0.3;
	}
	.hudson {
		-webkit-filter: brightness(1.2) contrast(0.9) saturate(1.1);
		filter: brightness(1.2) contrast(0.9) saturate(1.1);
	}
	.hudson::after {
		background: -webkit-radial-gradient(circle, #a6b1ff 50%, #342134);
		background: radial-gradient(circle, #a6b1ff 50%, #342134);
		mix-blend-mode: multiply;
		opacity: 0.5;
	}
	.earlybird {
		-webkit-filter: contrast(0.9) sepia(0.2);
		filter: contrast(0.9) sepia(0.2);
	}
	.earlybird::after {
		background: -webkit-radial-gradient(circle, #d0ba8e 20%, #360309 85%, #1d0210 100%);
		background: radial-gradient(circle, #d0ba8e 20%, #360309 85%, #1d0210 100%);
		mix-blend-mode: overlay;
	}
	.mayfair {
		-webkit-filter: contrast(1.1) saturate(1.1);
		filter: contrast(1.1) saturate(1.1);
	}
	.mayfair::after {
		background: -webkit-radial-gradient(
			40% 40%,
			circle,
			rgba(255, 255, 255, 0.8),
			rgba(255, 200, 200, 0.6),
			#111 60%
		);
		background: radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.8), rgba(255, 200, 200, 0.6), #111 60%);
		mix-blend-mode: overlay;
		opacity: 0.4;
	}
	.lofi {
		-webkit-filter: saturate(1.1) contrast(1.5);
		filter: saturate(1.1) contrast(1.5);
	}
	.lofi::after {
		background: -webkit-radial-gradient(circle, transparent 70%, #222 150%);
		background: radial-gradient(circle, transparent 70%, #222 150%);
		mix-blend-mode: multiply;
	}
	._1977 {
		-webkit-filter: contrast(1.1) brightness(1.1) saturate(1.3);
		filter: contrast(1.1) brightness(1.1) saturate(1.3);
	}
	._1977:after {
		background: rgba(243, 106, 188, 0.3);
		mix-blend-mode: screen;
	}
	.brooklyn {
		-webkit-filter: contrast(0.9) brightness(1.1);
		filter: contrast(0.9) brightness(1.1);
	}
	.brooklyn::after {
		background: -webkit-radial-gradient(circle, rgba(168, 223, 193, 0.4) 70%, #c4b7c8);
		background: radial-gradient(circle, rgba(168, 223, 193, 0.4) 70%, #c4b7c8);
		mix-blend-mode: overlay;
	}
	.xpro2 {
		-webkit-filter: sepia(0.3);
		filter: sepia(0.3);
	}
	.xpro2::after {
		background: -webkit-radial-gradient(circle, #e6e7e0 40%, rgba(43, 42, 161, 0.6) 110%);
		background: radial-gradient(circle, #e6e7e0 40%, rgba(43, 42, 161, 0.6) 110%);
		mix-blend-mode: color-burn;
	}
	.nashville {
		-webkit-filter: sepia(0.2) contrast(1.2) brightness(1.05) saturate(1.2);
		filter: sepia(0.2) contrast(1.2) brightness(1.05) saturate(1.2);
	}
	.nashville::after {
		background: rgba(0, 70, 150, 0.4);
		mix-blend-mode: lighten;
	}
	.nashville::before {
		background: rgba(247, 176, 153, 0.56);
		mix-blend-mode: darken;
	}
	.lark {
		-webkit-filter: contrast(0.9);
		filter: contrast(0.9);
	}
	.lark::after {
		background: rgba(242, 242, 242, 0.8);
		mix-blend-mode: darken;
	}
	.lark::before {
		background: #22253f;
		mix-blend-mode: color-dodge;
	}
	.moon {
		-webkit-filter: grayscale(1) contrast(1.1) brightness(1.1);
		filter: grayscale(1) contrast(1.1) brightness(1.1);
	}
	.moon::before {
		background: #a0a0a0;
		mix-blend-mode: soft-light;
	}
	.moon::after {
		background: #383838;
		mix-blend-mode: lighten;
	}
	.clarendon {
		-webkit-filter: contrast(1.2) saturate(1.35);
		filter: contrast(1.2) saturate(1.35);
	}
	.clarendon:before {
		background: rgba(127, 187, 227, 0.2);
		mix-blend-mode: overlay;
	}
	.willow {
		-webkit-filter: grayscale(0.5) contrast(0.95) brightness(0.9);
		filter: grayscale(0.5) contrast(0.95) brightness(0.9);
	}
	.willow::before {
		background-color: radial-gradient(40%, circle, #d4a9af 55%, #000 150%);
		mix-blend-mode: overlay;
	}
	.willow::after {
		background-color: #d8cdcb;
		mix-blend-mode: color;
	}
	.rise {
		-webkit-filter: brightness(1.05) sepia(0.2) contrast(0.9) saturate(0.9);
		filter: brightness(1.05) sepia(0.2) contrast(0.9) saturate(0.9);
	}
	.rise::after {
		background: -webkit-radial-gradient(circle, rgba(232, 197, 152, 0.8), transparent 90%);
		background: radial-gradient(circle, rgba(232, 197, 152, 0.8), transparent 90%);
		mix-blend-mode: overlay;
		opacity: 0.6;
	}
	.rise::before {
		background: -webkit-radial-gradient(circle, rgba(236, 205, 169, 0.15) 55%, rgba(50, 30, 7, 0.4));
		background: radial-gradient(circle, rgba(236, 205, 169, 0.15) 55%, rgba(50, 30, 7, 0.4));
		mix-blend-mode: multiply;
	}
	.slumber {
		-webkit-filter: saturate(0.66) brightness(1.05);
		filter: saturate(0.66) brightness(1.05);
	}
	.slumber::after {
		background: rgba(125, 105, 24, 0.5);
		mix-blend-mode: soft-light;
	}
	.slumber::before {
		background: rgba(69, 41, 12, 0.4);
		mix-blend-mode: lighten;
	}
	.brannan {
		-webkit-filter: sepia(0.5) contrast(1.4);
		filter: sepia(0.5) contrast(1.4);
	}
	.brannan::after {
		background-color: rgba(161, 44, 199, 0.31);
		mix-blend-mode: lighten;
	}
	.valencia {
		-webkit-filter: contrast(1.08) brightness(1.08) sepia(0.08);
		filter: contrast(1.08) brightness(1.08) sepia(0.08);
	}
	.valencia::after {
		background: #3a0339;
		mix-blend-mode: exclusion;
		opacity: 0.5;
	}
	._1977:after,
	._1977:before,
	.aden:after,
	.aden:before,
	.brannan:after,
	.brannan:before,
	.brooklyn:after,
	.brooklyn:before,
	.clarendon:after,
	.clarendon:before,
	.earlybird:after,
	.earlybird:before,
	.gingham:after,
	.gingham:before,
	.hudson:after,
	.hudson:before,
	.inkwell:after,
	.inkwell:before,
	.kelvin:after,
	.kelvin:before,
	.lark:after,
	.lark:before,
	.lofi:after,
	.lofi:before,
	.mayfair:after,
	.mayfair:before,
	.moon:after,
	.moon:before,
	.nashville:after,
	.nashville:before,
	.perpetua:after,
	.perpetua:before,
	.reyes:after,
	.reyes:before,
	.rise:after,
	.rise:before,
	.slumber:after,
	.slumber:before,
	.toaster:after,
	.toaster:before,
	.valencia:after,
	.valencia:before,
	.walden:after,
	.walden:before,
	.willow:after,
	.willow:before,
	.xpro2:after,
	.xpro2:before {
		content: '';
		display: block;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		position: absolute;
		pointer-events: none;
	}
	._1977,
	.aden,
	.brannan,
	.brooklyn,
	.clarendon,
	.earlybird,
	.gingham,
	.hudson,
	.inkwell,
	.kelvin,
	.lark,
	.lofi,
	.mayfair,
	.moon,
	.nashville,
	.perpetua,
	.reyes,
	.rise,
	.slumber,
	.toaster,
	.valencia,
	.walden,
	.willow,
	.xpro2 {
		position: relative;
	}
	._1977 img,
	.aden img,
	.brannan img,
	.brooklyn img,
	.clarendon img,
	.earlybird img,
	.gingham img,
	.hudson img,
	.inkwell img,
	.kelvin img,
	.lark img,
	.lofi img,
	.mayfair img,
	.moon img,
	.nashville img,
	.perpetua img,
	.reyes img,
	.rise img,
	.slumber img,
	.toaster img,
	.valencia img,
	.walden img,
	.willow img,
	.xpro2 img {
		width: 100%;
		z-index: 1;
	}
	._1977:before,
	.aden:before,
	.brannan:before,
	.brooklyn:before,
	.clarendon:before,
	.earlybird:before,
	.gingham:before,
	.hudson:before,
	.inkwell:before,
	.kelvin:before,
	.lark:before,
	.lofi:before,
	.mayfair:before,
	.moon:before,
	.nashville:before,
	.perpetua:before,
	.reyes:before,
	.rise:before,
	.slumber:before,
	.toaster:before,
	.valencia:before,
	.walden:before,
	.willow:before,
	.xpro2:before {
		z-index: 2;
	}
	._1977:after,
	.aden:after,
	.brannan:after,
	.brooklyn:after,
	.clarendon:after,
	.earlybird:after,
	.gingham:after,
	.hudson:after,
	.inkwell:after,
	.kelvin:after,
	.lark:after,
	.lofi:after,
	.mayfair:after,
	.moon:after,
	.nashville:after,
	.perpetua:after,
	.reyes:after,
	.rise:after,
	.slumber:after,
	.toaster:after,
	.valencia:after,
	.walden:after,
	.willow:after,
	.xpro2:after {
		z-index: 3;
	}
	.kelvin::after {
		background: #b77d21;
		mix-blend-mode: overlay;
	}
	.kelvin::before {
		background: #382c34;
		mix-blend-mode: color-dodge;
	}
`;

const ImageFilter = ({ filter, src }) => (
	<FilterBox>
		<div className={filter}>
			<InnerImg src={src} />
		</div>
	</FilterBox>
);

export default ImageFilter;
