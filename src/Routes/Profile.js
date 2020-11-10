import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from '../Components/Avatar';
import BoldText from '../Components/BoldText';
import Header from '../Components/Header';
import ImageFilter from '../Components/ImageFilter';
import NavigationBar from '../Components/NavigationBar';

const MyProfile = styled.div`
	padding: 16px;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: calc(100% - 100px);
	a {
		width: 100%;
		display: flex;
		border: 1px solid ${(props) => props.theme.lightGreyColor};
		height: 25px;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		color: ${(props) => props.theme.blackColor};
		border-radius: 5px;
		margin-top: 20px;
	}
`;

const MyInfo = styled.div`
	padding: 16px;
	display: flex;
`;

const MyResult = styled.div`
	border-top: 1px solid ${(props) => props.theme.lightGreyColor};
	border-bottom: 1px solid ${(props) => props.theme.lightGreyColor};
	padding: 12px 0;
	display: flex;
	span {
		flex: 1 0 33%;
		max-width: 33.3333%;
		text-align: center;
		color: ${(props) => props.theme.lightGreyColor};
		font-size: 14px;
		b {
			margin-top: 5px;
			font-size: 14px;
			display: block;
			color: ${(props) => props.theme.blackColor};
		}
	}
`;

const MyPost = styled.div`
	flex: 1 0 31%;
	max-width: 33.3333%;
	border: 1px solid #fff;
	background-image: url(${(props) => props.image});
	background-size: cover;
	background-position: center;
`;

const MyPosts = styled.div`
	display: flex;
	border: 1px solid #fff;
	flex-wrap: wrap;
`;

const EmptyText = styled.p`
	text-align: center;
	padding: 30px 0;
	font-size: 14px;
	color: ${(props) => props.theme.darkGreyColor};
`;

const MyIntro = styled.div`
	padding: 0 16px 16px;
	font-size: 14px;
`;

const Wrapper = styled.div``;

const Profile = ({ state: { user } }) => {
	const [intro, setIntro] = useState();
	const [posts, setPosts] = useState([]);
	const [myResult, setMyResult] = useState({ countPost: 0, follower: 0, follow: 0 });
	const getUserInfo = async () => {
		const response = await Axios.get(`/api/account/mypage/${user.id}`);
		if (response.status === 200) {
			const { BoardList, follower, following, intro } = response.data;
			setMyResult({
				countPost: BoardList.length,
				follower: follower,
				follow: following
			});
			setPosts(
				BoardList.map((post) => {
					if (post.Photo) {
						const url = post.Photo.url.split('/');
						post.image = `/api/image/${url[url.length - 1]}`;
					}
					return post;
				}).reverse()
			);
			setIntro(intro);
		}
	};

	useEffect(() => {
		getUserInfo();
	}, []);
	return (
		<Wrapper>
			<Header />
			<MyInfo>
				<Avatar size='lg' />
				<MyProfile>
					<BoldText text={user.username} />
					<Link to={'/profile/edit'}>프로필 편집</Link>
				</MyProfile>
			</MyInfo>
			<MyIntro>{intro}</MyIntro>
			<MyResult>
				<span>
					게시물<b>{myResult.countPost}</b>
				</span>
				<span>
					팔로워<b>{myResult.follower}</b>
				</span>
				<span>
					팔로우<b>{myResult.follow}</b>
				</span>
			</MyResult>
			<MyPosts>
				{posts.map((post) => (
					<MyPost key={post.id}>
						<ImageFilter filter={post.Photo.filter} src={post.image} />
					</MyPost>
				))}
			</MyPosts>

			{posts.length === 0 && <EmptyText>등록된 게시물이 없습니다</EmptyText>}
			<NavigationBar />
		</Wrapper>
	);
};

const mapState = (state) => ({ state });

export default connect(mapState)(Profile);
