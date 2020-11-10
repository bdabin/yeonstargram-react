import React from 'react';
import styled from 'styled-components';
import { Logo } from './Icons';

const FixedContainer = styled.div`
	height: 40px;
`;

const Container = styled.div`
	height: 40px;
	padding-top: 2px;
	border-bottom: 1px solid ${(props) => props.theme.lightGreyColor};
	display: flex;
	justify-content: center;
	align-content: center;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 10;
	background: #fff;
`;

const Header = () => (
	<FixedContainer>
		<Container>
			<Logo size='sm' />
		</Container>
	</FixedContainer>
);

export default Header;
