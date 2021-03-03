import { AppProps } from "next/app";

import "antd/dist/antd.css";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default App;
