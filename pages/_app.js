import { GlobalStyle } from "../styles/global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme.styled.tsx";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />

				<main>
					<Component {...pageProps} />
				</main>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
