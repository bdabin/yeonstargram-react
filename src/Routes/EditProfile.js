import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Button from '../Components/Button';
import Header from '../Components/Header';
import Input from '../Components/Input';
import NavigationBar from '../Components/NavigationBar';
import useInput from '../Hooks/useInput';

const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
	button {
		margin-top: 16px;
	}
`;

const Wrapper = styled.div``;

const EditProfile = ({ state: { user }, history }) => {
	const intro = useInput('');
	const getUserInfo = async () => {
		const response = await Axios.get(`/api/account/mypage/${user.id}`);
		if (response.status === 200) {
			intro.setValue(response.data.intro || '');
		}
	};

	const updateProfile = async () => {
		try {
			const response = await Axios.put('/api/account/mypage', {
				userId: user.id,
				intro: intro.value
			});
			if (response.status === 200) {
				toast.success('프로필 수정이 완료됐습니다 !');
				history.push('/profile');
			}
		} catch {
			toast.error('프로필을 수정할 수 없습니다. 새로고침 후 이용해주세요.');
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		updateProfile();
	};

	useEffect(() => {
		getUserInfo();
	}, []);

	return (
		<Wrapper>
			<Header />
			<form onSubmit={onSubmit}>
				<InputBox>
					<Input value={intro.value} onChange={intro.onChange} placeholder={'소개'} />
					<Button text={'저장'} />
				</InputBox>
			</form>
			<NavigationBar />
		</Wrapper>
	);
};

const mapState = (state) => ({ state });

export default connect(mapState)(EditProfile);
