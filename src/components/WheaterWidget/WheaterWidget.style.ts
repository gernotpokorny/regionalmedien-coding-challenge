import { styled } from "@mui/material";

// components
import { SwiperSlide } from 'swiper/react';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';

export const StyledWheaterImage = styled(Image)(({ theme }) => ({
	width: '100%',
	height: 'auto',
}));

export const StyledSwiperSlide = styled(SwiperSlide)(({ theme }) => ({
	'@media screen and (orientation:landscape)': {
		padding: '4vh 0',
	},
	'@media screen and (orientation:portrait)': {
		padding: '5vw 0',
	},
}));

export const SlideContentWrapper = styled(Box)(({ theme }) => ({
	padding: '0 4vw'
}));

export const Location = styled(Typography)(({ theme }) => ({
	fontWeight: 'bold',
	lineHeight: 1.05,
	'@media screen and (orientation:landscape)': {
		fontSize: '12vh',
	},
	'@media screen and (orientation:portrait)': {
		fontSize: '7vw',
	},
})) as typeof Typography;

export const MaxTemperature = styled(Typography)(({ theme }) => ({
	fontWeight: 'bold',
	'@media screen and (orientation:landscape)': {
		fontSize: '27vh',
		lineHeight: 1.05,
	},
	'@media screen and (orientation:portrait)': {
		fontSize: '13vw',
		lineHeight: 1.05,
	},
})) as typeof Typography;

export const MinTemperature = styled(Typography)(({ theme }) => ({
	fontWeight: 'bold',
	color: theme.palette.grey[500],
	'@media screen and (orientation:landscape)': {
		fontSize: '17vh',
		lineHeight: 1.05,
	},
	'@media screen and (orientation:portrait)': {
		fontSize: '8vw',
		lineHeight: 1.05,
	},
})) as typeof Typography;

export const WheaterDescription = styled(Typography)(({ theme }) => ({
	fontWeight: 'bold',
	'@media screen and (orientation:landscape)': {
		fontSize: '4vh',
	},
	'@media screen and (orientation:portrait)': {
		fontSize: '3vw',
	},
})) as typeof Typography;

export const FeelsLikeTemperature = styled(Typography)(({ theme }) => ({
	fontWeight: 'bold',
	'@media screen and (orientation:landscape)': {
		fontSize: '4vh',
	},
	'@media screen and (orientation:portrait)': {
		fontSize: '3vw',
	},
})) as typeof Typography;

export const TrackingDate = styled(Typography)(({ theme }) => ({
	fontWeight: 'bold',
	'@media screen and (orientation:landscape)': {
		fontSize: '4vh',
	},
	'@media screen and (orientation:portrait)': {
		fontSize: '3vw',
	},
})) as typeof Typography;