import { ETH as ETHIcon } from "../../components/Svg/tokens";
import BinanceChain from "./icons/BinanceChain";
import PolygonChain from "./icons/PolygonChain";
import DogeChain from "./icons/DogeChain";
import { Config } from "./types";

export enum ChainId {
  DOGECHAIN = 2000,
  DOGECHAIN_TESTNET = 568
}

export const NETWORK_ICON: { [key: number]: any } = {
  [ChainId.DOGECHAIN]: DogeChain,
  [ChainId.DOGECHAIN_TESTNET]: DogeChain,
};

export const NETWORK_LABEL: { [key: number]: any } = {
  [ChainId.DOGECHAIN]: "Dogechain",
  [ChainId.DOGECHAIN_TESTNET]: "Testnet",
};

const networks: Config[] = [
  {
    chainId: ChainId.DOGECHAIN,
    networkName: "Dogechain",
    symbol: NETWORK_LABEL[ChainId.DOGECHAIN],
    icon: NETWORK_ICON[ChainId.DOGECHAIN],
  },
  {
    chainId: ChainId.DOGECHAIN_TESTNET,
    networkName: "Testnet",
    symbol: NETWORK_LABEL[ChainId.DOGECHAIN_TESTNET],
    icon: NETWORK_ICON[ChainId.DOGECHAIN_TESTNET],
  },
];

export default networks;
