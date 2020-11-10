import React from 'react';
import styled from 'styled-components';
import { Logo } from './Icons';

const LogoPosition = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

const NextBtn = styled.button`
	font-size: 14px;
	color: ${(props) => props.theme.blueColor};
	padding: 0 8px;
`;

const Buttons = styled.div`
	display: flex;
	align-items: center;
	margin: 0 8px;
`;

const FixedContainer = styled.div`
	height: 40px;
`;

const Container = styled.div`
	height: 40px;
	padding-top: 2px;
	border-bottom: 1px solid ${(props) => props.theme.lightGreyColor};
	display: flex;
	justify-content: space-between;
	align-content: center;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 10;
	background: #fff;
`;

const Header = ({ nextBtn = false, nextAction, next = '다음' }) => (
	<FixedContainer>
		<Container>
			<Buttons></Buttons>
			<LogoPosition>
				<Logo size='sm' />
			</LogoPosition>
			<Buttons>{nextBtn && <NextBtn onClick={nextAction}>{next}</NextBtn>}</Buttons>
		</Container>
	</FixedContainer>
);

export default Header;
