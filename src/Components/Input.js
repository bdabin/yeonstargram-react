import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.input`
	border-radius: 7px;
	width: 100%;
	height: 45px;
	color: ${(props) => props.theme.blackColor};
	border: 1px solid ${(props) => props.theme.lightGreyColor};
	outline: 0;
	padding: 0 16px;
	&::placeholder {
		color: ${(props) => props.theme.lightGreyColor};
	}
`;

const Input = ({ value, onChange, type = 'text', placeholder }) => (
	<Container value={value} onChange={onChange} type={type} placeholder={placeholder}></Container>
);

Input.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	type: PropTypes.string,
	placeholder: PropTypes.string
};

export default Input;
