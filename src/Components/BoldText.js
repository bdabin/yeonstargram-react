import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.span`
	font-weight: bold;
`;

const BoldText = ({ text }) => <Container>{text}</Container>;

BoldText.propTypes = {
	text: PropTypes.string.isRequired
};

export default BoldText;
