import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectWallet } from "@thirdweb-dev/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex">
      <ConnectWallet />
    </main>
  );
}
