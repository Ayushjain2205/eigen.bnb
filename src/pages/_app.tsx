import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { BinanceTestnet } from "@thirdweb-dev/chains";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={BinanceTestnet}
      clientId="39a24e614ae8f21dec3aef65eb2fc094"
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
