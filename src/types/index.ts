interface ResponseWheaterDataRecord {
	main: {
		feels_like: number;
		temp_min: number;
		temp_max: number;
	},
	weather: [
		{
			id: number;
			description: string;
			icon: string;
		}
	],
	dt_txt: string;
}

export interface ResponseWheaterData {
	list: ResponseWheaterDataRecord[];
}