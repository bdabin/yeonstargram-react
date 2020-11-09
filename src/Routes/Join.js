import React from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import Button from '../Components/Button';
import { Logo } from '../Components/Icons';
import Input from '../Components/Input';
import useInput from '../Hooks/useInput';
import { API_URL } from '../config';

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
	display: flex;
	justify-content: center;
`;

const InputWrap = styled.div`
	display: flex;
	flex-direction: column;
	height: ${window.innerHeight - 52 + 'px'};
	justify-content: center;
	padding-bottom: 52px;
	input {
		margin-bottom: 8px;
	}
	button {
		margin-top: 8px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 16px;
`;

const Join = () => {
	const email = useInput('');
	const password = useInput('');
	const username = useInput('');
	const phone = useInput('');

	console.log(API_URL);

	const onSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<Wrapper>
			<LogoWrapper>
				<LogoAnimation>
					<Logo size={'md'} />
				</LogoAnimation>
			</LogoWrapper>
			<form onSubmit={onSubmit}>
				<InputWrap>
					<Input placeholder={'이메일'} type='email' {...email} />
					<Input placeholder={'비밀번호'} type='password' {...password} />
					<Input placeholder={'이름'} {...username} />
					<Input placeholder={'휴대폰번호'} {...phone} />
					<Button text={'회원가입'} />
				</InputWrap>
			</form>
		</Wrapper>
	);
};

export default Join;
