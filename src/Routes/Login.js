import Axios from 'axios';
import React from 'react';
import { useCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import styled, { keyframes } from 'styled-components';
import Button from '../Components/Button';
import { Logo } from '../Components/Icons';
import Input from '../Components/Input';
import useInput from '../Hooks/useInput';
import { loginSuccess } from '../store';

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

const Login = ({ history, dispatch }) => {
	const email = useInput('');
	const password = useInput('');
	const [cookie, setCookie] = useCookies(['accountToken']);

	const requestLogin = async () => {
		if (email.value === '') {
			toast.error('이메일을 입력해주세요');
			return;
		}
		if (password.value === '') {
			toast.error('비밀번호를 입력해주세요.');
			return;
		}
		try {
			const response = await Axios.post('/api/account/login', {
				email: email.value,
				password: password.value
			});

			if (response.status === 200) {
				const user = await Axios.get('/api/account');
				dispatch(loginSuccess(user.data));
				history.push('/');
			}
		} catch (e) {
			toast.error('이메일과 비밀번호를 확인해주세요.');
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		requestLogin();
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
					<Input placeholder={'이메일'} type='email' value={email.value} onChange={email.onChange} />
					<Input
						placeholder={'비밀번호'}
						type='password'
						value={password.value}
						onChange={password.onChange}
					/>
					<Button text={'로그인'} />
				</InputWrap>
			</form>
		</Wrapper>
	);
};

const getCurrentDispatch = (dispatch) => {
	return { dispatch };
};

export default connect(null, getCurrentDispatch)(Login);
