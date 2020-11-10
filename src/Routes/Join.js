import React from 'react';
import Axios from 'axios';
import styled, { keyframes } from 'styled-components';
import Button from '../Components/Button';
import { Logo } from '../Components/Icons';
import Input from '../Components/Input';
import useInput from '../Hooks/useInput';
import { toast } from 'react-toastify';

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

const Join = ({ history }) => {
	const email = useInput('');
	const password = useInput('');
	const repassword = useInput('');
	const username = useInput('');
	const phone = useInput('');

	const createAccount = async () => {
		if (email.value === '') {
			toast.error('이메일을 입력하세요');
			return;
		}
		if (username.value === '') {
			toast.error('이름을 입력하세요');
			return;
		}
		if (password.value !== repassword.value) {
			toast.error('비밀번호가 일치하지 않습니다');
			return;
		}

		try {
			const response = await Axios.post('/api/account/join', {
				email: email.value,
				password: password.value,
				username: username.value,
				phone: phone.value
			});
			if (response.status === 200) {
				toast.success('회원가입이 완료되었습니다! \n가입한 이메일로 로그인을 해주세요.');
				history.push('/login');
			}
		} catch (e) {
			toast.error(e.response.data);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		createAccount();
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
					<Input
						placeholder={'비밀번호 확인'}
						type='password'
						value={repassword.value}
						onChange={repassword.onChange}
					/>
					<Input placeholder={'이름'} value={username.value} onChange={username.onChange} />
					<Input placeholder={'휴대폰번호'} value={phone.value} onChange={phone.value} />
					<Button text={'회원가입'} />
				</InputWrap>
			</form>
		</Wrapper>
	);
};

export default Join;
