import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Header from '../Components/Header';
import NavigationBar from '../Components/NavigationBar';
import Post from '../Components/Post';

const Wrapper = styled.div``;

const Feed = ({
	state: {
		user: { id }
	}
}) => {
	const [feeds, setFeeds] = useState([]);
	const getFeeds = async () => {
		try {
			const response = await Axios.get('/api/board');
			const data = response.data.map((post) => {
				if (post.Photo) {
					const url = post.Photo.url.split('/');
					post.image = `/api/image/${url[url.length - 1]}`;
				}

				const result = post.like.find((data) => data.user_id === id);
				post.likeIt = Boolean(result);

				post.likeCount = post.like.length;
				return post;
			});
			setFeeds(data.reverse());
		} catch {
			toast.error('피드를 불러올 수 없습니다.');
		}
	};
	useEffect(() => {
		getFeeds();
	}, []);
	return (
		<Wrapper>
			<Header />
			{feeds.map((feed) => (
				<Post key={feed.id} {...feed} />
			))}
			<NavigationBar />
		</Wrapper>
	);
};

const mapState = (state) => ({
	state
});

export default connect(mapState)(Feed);
