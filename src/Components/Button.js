import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.button`
	width: 100%;
	height: 45px;
	border-radius: 7px;
	border: 1px solid ${(props) => props.theme.blueColor};
	background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.blueColor)};
	color: ${(props) => (props.bgColor ? props.theme.blueColor : '#fff')};
	font-size: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: 0;
	&:not(:last-child) {
		margin-bottom: 16px;
	}
`;

const Button = ({ text = 'OK', onClick, bgColor }) => (
	<Container onClick={onClick} bgColor={bgColor}>
		{text}
	</Container>
);

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func
};

export default Button;
