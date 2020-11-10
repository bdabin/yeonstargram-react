import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-image: url(${(props) => props.image});
	background-color: #eee;
	background-size: cover;
	background-position: center;
`;

const Avatar = ({ image }) => <Container image={image} />;

export default Avatar;
