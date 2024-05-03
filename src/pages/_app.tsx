import { AppProps } from "next/app";
import "@/src/app/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Component {...pageProps} />
    );
}

export default App;