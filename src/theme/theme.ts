import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		background: {
			default: "#d2d4dd"
		}
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					height: '100vh',
					overflow: 'hidden'
				},
				'#__next': {
					height: '100%'
				}
			}
		}
	}
});
