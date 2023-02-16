// components
import CssBaseline from "@mui/material/CssBaseline";

// theme
import { ThemeProvider } from "@mui/material/styles";
import { theme } from '@/theme';

// types
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
