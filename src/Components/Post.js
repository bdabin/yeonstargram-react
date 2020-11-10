import React, { useState } from 'react';
import styled from 'styled-components';
import BoldText from './BoldText';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import { Comment, HeartEmpty, HeartFull } from './Icons';
import Axios from 'axios';
import { connect } from 'react-redux';
import ImageFilter from './ImageFilter';

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

const Options = styled.div`
	display: flex;
	align-items: center;
	padding: 0 16px;
	padding-top: 5px;
	height: 35px;
	button {
		cursor: pointer;
		margin-right: 12px;
	}
`;

const LikeCount = styled.div`
	padding: 0 16px;
	padding-top: 2px;
	color: ${(props) => props.theme.blackColor};
	font-size: 14px;
	b {
		font-weight: bold;
		margin-right: 5px;
	}
`;

const Description = styled.div`
	padding: 4px 16px 16px;
	min-height: 60px;
	word-break: break-all;
	span {
		margin-right: 5px;
	}
	a {
		margin: 0 4px;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Post = ({
	User: { username },
	Photo: { filter },
	image,
	description: desc,
	hashtag,
	likeIt,
	id,
	likeCount,
	state
}) => {
	const [like, setLike] = useState(likeIt);
	const [newLikeCount, setLikeCount] = useState(likeCount);
	const user = state.user;
	const onLike = async () => {
		const method = likeIt ? 'delete' : 'post';
		const response = await Axios({
			method,
			url: '/api/board/like',
			data: {
				user_id: user.id,
				board_id: id
			}
		});

		if (response.status === 200) {
			setLike(!like);
			setLikeCount(like ? newLikeCount - 1 : newLikeCount + 1);
		}
	};
	return (
		<Container>
			<Header>
				<Avatar />
				<BoldText text={username} />
			</Header>
			<ImageFilter filter={filter} src={image} />
			<Options>
				<button onClick={onLike}>{like ? <HeartFull /> : <HeartEmpty />}</button>
				<button>
					<Comment />
				</button>
			</Options>
			<LikeCount>
				<b>{newLikeCount}</b>좋아요
			</LikeCount>
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
};

const mapState = (state) => ({ state });

export default connect(mapState)(Post);
