import "../styles/tailwind.css";
import { Theme, useTheme } from "react-daisyui";

function MyApp({ Component, pageProps }) {
	const theme = useTheme();
	return (
		<Theme dataTheme={theme}>
			<Component {...pageProps} />
		</Theme>
	);
}

export default MyApp;
