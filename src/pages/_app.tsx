import { type AppType } from "next/dist/shared/lib/utils";
import Web3Provider from "~/providers/Web3";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Web3Provider>
      <Component {...pageProps} />;
    </Web3Provider>
  )
};

export default MyApp;
