import OwnThemeProvider from "../Components/Theme/OwnThemeProvider";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<OwnThemeProvider>
			<Component {...pageProps} />;
		</OwnThemeProvider>
	);
}

export default MyApp;
