import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Components/Button';
import { Logo } from '../Components/Icons';
import Input from '../Components/Input';
import useInput from '../Hooks/useInput';

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
		margin-bottom: 16px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 16px;
`;

const Login = () => {
	const email = useInput('');
	const password = useInput('');

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
					<Button text={'로그인'} />
				</InputWrap>
			</form>
		</Wrapper>
	);
};

export default Login;
