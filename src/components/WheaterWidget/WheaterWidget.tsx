import { useState } from 'react';

// components
import { Swiper } from 'swiper/react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

// styles
import 'swiper/css';
import {
	StyledWheaterImage,
	StyledSwiperSlide,
	SlideContentWrapper,
	Location,
	MaxTemperature,
	MinTemperature,
	WheaterDescription,
	FeelsLikeTemperature,
	TrackingDate
} from './WheaterWidget.style';

// types
import { Swiper as SwiperClass } from 'swiper/types';

interface Wheater {
	id: number;
	description: string;
	icon: string;
}

export interface WheaterData {
	location: string;
	minTemperature: number;
	maxTemperature: number;
	feelsLikeTemperature: number;
	trackingDate: number;
	weather: Wheater,
}

interface WheaterWidgetProps {
	wheaterData: WheaterData[];
	initialSlide?: number;
	onSlideChange?: (activeIndex: number) => void;
}

export const WheaterWidget: React.FC<WheaterWidgetProps> = ({
	wheaterData,
	initialSlide = 0,
	onSlideChange
}) => {
	const [swiper, setSwiper] = useState<SwiperClass | null>(null);

	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={1}
			onSlideChange={() => {
				if (swiper) {
					if (onSlideChange) {
						onSlideChange(swiper.activeIndex);
					}
				}
			}}
			onSwiper={(swiper) => {
				setSwiper(swiper);
			}}
			initialSlide={initialSlide}
		>
			{wheaterData.map((data) => (
				<StyledSwiperSlide key={data.trackingDate.toString()}>
					<SlideContentWrapper>
						<Grid container spacing={0}>
							<Grid item xs={12}>
								<Box>
									<Location component='h2'>
										{data.location}
									</Location>
								</Box>
							</Grid>
							<Grid item xs={12}>
								<Box>
									<TrackingDate component='h3'>
										{
											new Date(data.trackingDate).toLocaleDateString('de-DE', {
												weekday: 'long',
												year: 'numeric',
												month: 'long',
												day: '2-digit',
												hour: '2-digit',
												minute: '2-digit',
												second: '2-digit',
											})
										}
									</TrackingDate>
								</Box>
							</Grid>
							<Grid item xs={4} sx={{ position: 'relative' }}>
								<StyledWheaterImage src={`http://openweathermap.org/img/wn/${data.weather.icon}@2x.png`} alt={data.weather.description} width={100} height={100} />
							</Grid>
							<Grid item xs={8}>
								<Grid container alignItems='flex-end' sx={{ paddingLeft: '10vw' }}>
									<Grid item xs={12}>
										<Box>
											<MaxTemperature>
												{`${Math.round(data.maxTemperature)}\u2103`}
											</MaxTemperature>
										</Box>
									</Grid>
									<Grid item xs={12}>
										<Box>
											<MinTemperature>
												{`${Math.round(data.minTemperature)}\u2103`}
											</MinTemperature>
										</Box>
									</Grid>
									<Grid item xs={12}>
										<Box>
											<WheaterDescription>
												{data.weather.description}
											</WheaterDescription>
										</Box>
									</Grid>
									<Grid item xs={12}>
										<Box>
											<FeelsLikeTemperature>
												{`Gefühlte Temperatur: ${Math.round(data.feelsLikeTemperature)}\u2103`}
											</FeelsLikeTemperature>
										</Box>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</SlideContentWrapper>
				</StyledSwiperSlide>
			))}
		</Swiper>
	);
};