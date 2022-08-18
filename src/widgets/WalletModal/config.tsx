import Metamask from "./icons/Metamask";
import Brave from "./icons/Brave";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import BinanceChain from "./icons/BinanceChain";
import OntoWallet from "./icons/OntoWallet";
import Nabox from "./icons/Nabox";
import SafePalWallet from "./icons/SafePalWallet";
import TorusWallet from "./icons/SocialLogin";
import Coinbase from "./icons/Coinbase";
import Unstoppable from "./icons/Unstoppable";
import Bitkeep from "./icons/Bitkeep";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
];

export default connectors;
export const localStorageKey = "accountStatus";
