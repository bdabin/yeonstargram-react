import React from 'react';
import styled from 'styled-components';
import Button from '../Components/Button';
import { Error } from '../Components/Icons';

const ButtonWrap = styled.div`
	padding: 16px;
	width: 100%;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: ${window.innerHeight + 'px'};
	p {
		margin-top: 20px;
		margin-bottom: 20px;
	}
`;

const Error404 = ({ history }) => {
	const onClick = () => history.goBack();
	return (
		<Container>
			<Error />
			<p>페이지를 찾을 수 없습니다.</p>
			<ButtonWrap>
				<Button text={'뒤로가기'} bgColor={'#eee'} color={'#000'} onClick={onClick} />
			</ButtonWrap>
		</Container>
	);
};

export default Error404;
