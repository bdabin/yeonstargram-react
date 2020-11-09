import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Button from '../Components/Button';
import { Logo } from '../Components/Icons';

const Buttons = styled.div`
	padding: 0 16px 16px;
	margin-top: auto;
	a:not(:last-child) {
		display: block;
		margin-bottom: 16px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: ${window.innerHeight + 'px'};
`;

const animation = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

const LogoAnimation = styled.div`
	animation: ${animation} 3s linear infinite;
`;

const LogoWrapper = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: -1;
	padding-bottom: 122px;
`;

export default () => {
	return (
		<Wrapper>
			<LogoWrapper>
				<LogoAnimation>
					<Logo size={'lg'} />
				</LogoAnimation>
			</LogoWrapper>

			<Buttons>
				<Link to={'/login'}>
					<Button text={'로그인'} />
				</Link>
				<Link to={'/join'}>
					<Button text={'회원가입'} bgColor={'#fff'} />
				</Link>
			</Buttons>
		</Wrapper>
	);
};
