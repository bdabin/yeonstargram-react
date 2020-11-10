import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BoldText from './BoldText';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';

const Header = styled.div`
	height: 45px;
	display: flex;
	align-items: center;
	padding: 0 16px;
	border-top: 1px solid ${(props) => props.theme.lightGreyColor};
	border-bottom: 1px solid ${(props) => props.theme.lightGreyColor};
	span {
		margin-left: 8px;
	}
`;

const Photo = styled.div`
	width: 100%;
	padding-bottom: 100%;
	position: relative;
	background-image: url(${(props) => props.image});
	background-size: cover;
	background-position: center;
`;

const Description = styled.div`
	padding: 16px;
	min-height: 100px;
	word-break: break-all;
	span {
		margin-right: 5px;
	}
	a {
		margin: 0 2px;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Post = ({ User: { username }, image, description: desc, hashtag }) => (
	<Container>
		<Header>
			<Avatar />
			<BoldText text={username} />
		</Header>
		<Photo image={image} />
		<Description>
			<BoldText text={username} />
			{desc}
			{hashtag.map((tag) => (
				<Link key={tag.id} to={`/search?term=${tag.name.split('#')[1]}`}>
					{tag.name}
				</Link>
			))}
		</Description>
	</Container>
);

export default Post;
