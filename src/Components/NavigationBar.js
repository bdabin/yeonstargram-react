import React from 'react';
import styled from 'styled-components';

const FixedContainer = styled.div`
	height: 45px;
`;

const Container = styled.div`
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 45px;
	border-top: 1px solid ${(props) => props.theme.lightGreyColor};
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #fff;
`;

const NavigationBar = () => (
	<FixedContainer>
		<Container></Container>
	</FixedContainer>
);

export default NavigationBar;
