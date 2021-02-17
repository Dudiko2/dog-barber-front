import { AppProps } from "next/app";
import "antd/dist/antd.css";
import "../styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default App;
