import { useState } from 'react';
import { useRouter } from 'next/router';

// components
import Head from 'next/head'
import { WheaterWidget } from '@/components/WheaterWidget';

// tools
import { formatDate } from '@/shared/utils/formattingUtils'

// types
import { GetServerSideProps } from 'next'
import { WheaterData } from '@/components/WheaterWidget';
import { ResponseWheaterData } from '@/types';

interface DailyPreviewProps {
	wheaterData: WheaterData[] | null;
	initialSlide: number;
}

const DailyPreview: React.FC<DailyPreviewProps> = ({
	wheaterData,
	initialSlide,
}) => {
	const [metaDescription, setMetaDescription] = useState(wheaterData
		? `Wheater - ${wheaterData[initialSlide].location} - ${wheaterData[initialSlide].trackingDate}`
		: 'Wheater data could not be retrieved.');
	const router = useRouter();

	const onSlideChange = (activeIndex: number) => {
		if (wheaterData) {
			const slideId = formatDate(new Date(wheaterData[activeIndex].trackingDate))
			router.push(`/${slideId}`, undefined, { shallow: true });
			setMetaDescription(`Wheater - ${wheaterData[activeIndex].location} - ${wheaterData[activeIndex].trackingDate}`);
		}
	};

	return (
		<>
			<Head>
				<title>The Best Wheater-App powered by RegionalMedien Austria AG</title>
				<meta name="description" content={metaDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/wheater-app.ico" />
			</Head>
			{wheaterData && (
				<WheaterWidget
					wheaterData={wheaterData}
					initialSlide={initialSlide !== -1 ? initialSlide : undefined}
					onSlideChange={onSlideChange}
				/>
			)}
			{!wheaterData && <p>Weather data could not be retrieved.</p>}
		</>
	)
}

export const getServerSideProps: GetServerSideProps<DailyPreviewProps> = async (context) => {
	const slideId = context!.params!.slideId;

	const API_KEY = 'c7a4e69b097cf32666aeda302c55d94e';
	const LATITUDE = 48.210033;
	const LONGITUDE = 16.363449;
	const UNITS = 'metric';
	const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}&cnt=5&units=${UNITS}&lang=de&cnt=5`;
	const response = await fetch(URL);
	if (response.ok) {
		const data: ResponseWheaterData = await response.json();
		const wheaterData: WheaterData[] = data.list.map((record) => {
			return {
				location: 'Wien',
				minTemperature: record.main.temp_min,
				maxTemperature: record.main.temp_max,
				feelsLikeTemperature: record.main.feels_like,
				trackingDate: new Date(record.dt_txt).getTime(),
				weather: record.weather[0],
			};
		});
		const initialSlide = wheaterData
			? wheaterData.findIndex((data) => {
				return formatDate(new Date(data.trackingDate)) === slideId;
			})
			: -1;
		if (initialSlide !== -1) {
			return {
				props: {
					wheaterData,
					initialSlide,
				},
			};
		}
		else {
			return {
				notFound: true,
			}
		}
	}
	else {
		return {
			props: {
				wheaterData: null,
				initialSlide: -1,
			},
		};
	}
};

export default DailyPreview;