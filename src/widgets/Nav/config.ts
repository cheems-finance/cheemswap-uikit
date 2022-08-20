import { NavProps } from "./types";

const links: NavProps["links"] = [
  {
    label: "Trade",
    items: [
      {
        label: "Exchange",
        href: "https://swap.cheemswap.dog",
      },
      {
        label: "Liquidity",
        href: "https://swap.cheemswap.dog/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    href: "/farms",
  },
  {
    label: "Pools",
    href: "/pools",
  },
  {
    label: "Lottery",
    href: "/lottery",
  },
  {
    label: "Analytics",
    href: "https://info.cheemswap.dog",
  },
  {
    label: "IFO",
    href: "/ifo",
  },
  {
    label: "NFT",
    href: "/nft",
  },
];

export default links;
