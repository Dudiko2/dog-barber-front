import { AppProps } from "next/app";

import WithAuth from "../hoc/WithAuth";

import "antd/dist/antd.css";
import "../styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<WithAuth>
			<Component {...pageProps} />
		</WithAuth>
	);
};

export default App;
