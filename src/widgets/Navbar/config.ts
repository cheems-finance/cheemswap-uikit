import { MenuEntry } from "./types";

export const links: MenuEntry[] = [
  {
    label: "Exchange",
    href: "/swap",
    isNew: false,
  },
  {
    label: "Stake",
    lightIcon: "StakeLightImage",
    darkIcon: "StakeDarkImage",
    items: [
      {
        label: "CHEEMS Farms",
        href: "/farms",
        isNew: false,
      },
      {
        label: "Pools",
        href: "/pools",
        isNew: false,
      },
      {
        label: "Kernel Farms",
        href: "/jungle-farms",
        isNew: true,
      },
      {
        label: "Vaults",
        href: "/vaults",
        isNew: false,
      },
      {
        label: "WOOF",
        href: "/woof",
        isNew: false,
      },
    ],
  },
  {
    label: "Raise",
    lightIcon: "OfferingsLightImage",
    darkIcon: "OfferingsDarkImage",
    items: [
      {
        label: "Official IDO",
        href: "/ido",
        isNew: false,
      },
      {
        label: "Self-Serve",
        href: "/ss-ido",
        isNew: false,
      },
    ],
  },

  {
    label: "Collect",
    lightIcon: "NfaLightImage",
    darkIcon: "NfaDarkImage",
    items: [
      {
        label: "Collection",
        href: "/nft",
        isNew: false,
      },
      {
        label: "NFA Auction",
        href: "/auction",
        isNew: false,
      },
      {
        label: "Staking",
        href: "/staking",
        isNew: false,
      },
    ],
  },
  {
    label: "Lend",
    href: "https://lend.cheemswap.finance/",
    isNew: false,
  },
  {
    label: "More",
    lightIcon: "MoreLightImage",
    darkIcon: "MoreDarkImage",
    items: [
      {
        label: "Docs",
        href: "https://cheemsswap.gitbook.io/cheemswap-finance/",
        isNew: false,
      },
      {
        label: "Charts",
        href: "https://cheemsswap.gitbook.io/cheemswap-finance/",
        isNew: false,
      },
      {
        label: "Governance",
        href: "https://vote.cheemswap.finance",
        isNew: false,
      },
      {
        label: "CHEEMS Burns",
        href: "/burn",
        isNew: false,
      },
    ],
  },
];

export const MENU_HEIGHT = 60;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
