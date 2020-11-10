import React from 'react';
import styled from 'styled-components';

const defaultImg = require('../assets/images/default_user.png');

const getSize = (size) => {
	if (size === 'sm') {
		return `
      width: 20px;
      height: 20px;
    `;
	} else if (size === 'md') {
		return `
      width: 50px;
      height: 50px;
    `;
	} else {
		return `
        width: 100px;
        height: 100px;
      `;
	}
};

const Container = styled.div`
	${(props) => getSize(props.size)}
	border-radius: 50%;
	background-image: url(${(props) => props.image});
	background-color: #eee;
	background-size: cover;
	background-position: center;
`;

const Avatar = ({ image = defaultImg.default, size = 'sm' }) => <Container image={image} size={size} />;

export default Avatar;
