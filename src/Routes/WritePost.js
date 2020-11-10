import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Header from '../Components/Header';
import ImageFilter from '../Components/ImageFilter';
import Input from '../Components/Input';
import NavigationBar from '../Components/NavigationBar';
import useInput from '../Hooks/useInput';

const FilterList = styled.ul`
	display: flex;
	flex-wrap: nowrap;
	overflow-x: scroll;
	/* margin-top: 16px; */
	padding-bottom: 16px;
`;
const FilterListItem = styled.li`
	min-width: 100px;
	height: 100px;
	span {
		display: block;
		text-align: center;
		font-size: 12px;
		margin-top: 6px;
	}
`;

const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
	textarea {
		border: 1px solid ${(props) => props.theme.lightGreyColor};
		resize: none;
		padding: 16px;
		outline: 0;
		border-radius: ${(props) => props.theme.borderRadius};
		margin-bottom: 16px;
		font-size: 14px;
		&::placeholder {
			color: ${(props) => props.theme.lightGreyColor};
		}
	}
`;

const Wrapper = styled.div``;
const filters = [
	'normal',
	'clarendon',
	'gingham',
	'moon',
	'lark',
	'reyes',
	'juno',
	'slumber',
	'aden',
	'perpetua',
	'mayfair',
	'rise',
	'hudson',
	'valencia',
	'xpro2',
	'willow',
	'lofi',
	'inkwell',
	'nashville'
];

const WritePost = ({ history, uploadImg: { image, data: img }, userId: writer }) => {
	const [step, setStep] = useState({ index: 0, text: '다음' });
	const [filter, setFilter] = useState('');
	const description = useInput('');
	const tag = useInput('');

	const onClick = (index) => {
		setFilter(filters[index]);
	};

	const nextAction = () => {
		if (step.index === 0) {
			setStep({ index: 1, text: '저장' });
		} else {
			createPost();
		}
	};

	const createPost = async () => {
		const formData = new FormData();
		formData.append('url', img, img.name);
		formData.append('filter', filter);

		try {
			const photoResponse = await Axios.post('/api/photo', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			});

			const response = await Axios.post('/api/board/write', {
				description: description.value,
				tag: tag.value,
				writer,
				photo: photoResponse.data.id
			});

			if (response.status === 200) {
				toast.success('작성이 완료되었습니다.');
				history.push('/');
			}
		} catch (error) {
			toast.error('글을 작성하는 도중 에러가 발생했습니다. 다시 시도해주세요.');
		}
	};

	return (
		<Wrapper>
			<Header nextBtn nextAction={nextAction} next={step.text} />
			{/* step1. 이미지 업로드 */}
			{step.index === 0 && (
				<>
					<ImageFilter src={image} filter={filter} />
					<FilterList>
						{filters.map((filter, i) => (
							<FilterListItem key={filter} onClick={() => onClick(i)}>
								<ImageFilter src={image} filter={filter} />
								<span>{filter}</span>
							</FilterListItem>
						))}
					</FilterList>
				</>
			)}
			{/* step2. 내용 입력 */}
			{step.index === 1 && (
				<>
					<InputBox>
						<textarea
							placeholder={'내용을 입력해주세요.'}
							value={description.value}
							onChange={description.onChange}
						></textarea>
						<Input
							placeholder={'태그를 입력하세요 ex ) #ootd #셀피'}
							value={tag.value}
							onChange={tag.onChange}
						/>
					</InputBox>
				</>
			)}

			<NavigationBar />
		</Wrapper>
	);
};

const mapState = (state) => ({ uploadImg: state.uploadImg, userId: state.user.id });

export default connect(mapState)(WritePost);
