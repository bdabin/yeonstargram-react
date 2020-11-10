import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { uploadImg } from '../store';
import { HomeEmpty, HomeFull, PlusEmpty, PlusFull, UserEmpty, UserFull } from './Icons';

const FileUpload = styled.input`
	position: absolute;
	width: 0;
	height: 0;
	opacity: 0;
	overflow: hidden;
`;

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
	padding: 0 16px;
`;

const NavigationBar = ({ history, dispatch }) => {
	const [currentPath, setCurrentPath] = useState();
	const location = useLocation();

	useEffect(() => {
		setCurrentPath(location.pathname);
	}, [location]);

	const onChange = ({ target }) => {
		const files = target.files;
		const reader = new FileReader();
		reader.readAsDataURL(files[0]);
		if (files.length > 0) {
			reader.onload = (e) => {
				dispatch(
					uploadImg({
						data: files[0],
						image: e.target.result
					})
				);
				history.push('/write');
			};
		}
	};
	return (
		<FixedContainer>
			<Container>
				<Link to='/'>{currentPath === '/' ? <HomeFull /> : <HomeEmpty />}</Link>
				<button>
					<label>
						<FileUpload type='file' accept='image/gif, image/jpeg, image/png' onChange={onChange} />
						{currentPath === '/write' ? <PlusFull /> : <PlusEmpty />}
					</label>
				</button>
				{/* <Link to='/write'></Link> */}
				<Link to='/profile'>{currentPath === '/profile' ? <UserFull /> : <UserEmpty />}</Link>
			</Container>
		</FixedContainer>
	);
};

const mapDispatch = (dispatch) => ({ dispatch });

export default connect(null, mapDispatch)(withRouter(NavigationBar));
