"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { darkTheme } from "@rainbow-me/rainbowkit";
import { anvil, Chain } from "wagmi/chains";
import { isBrowser } from "@/utils/environment";

const coreMainnet: Chain = {
  id: 1116,
  name: "Core Blockchain Mainnet",
  nativeCurrency: {
    name: "Core",
    symbol: "CORE",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.coredao.org"],
      webSocket: ["wss://ws.coredao.org"],
    },
    public: {
      http: ["https://rpc.coredao.org"],
      webSocket: ["wss://ws.coredao.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "CoreScan",
      url: "https://scan.coredao.org",
    },
  },
  testnet: false,
};

const coreTestnet: Chain = {
  id: 1114,
  name: "Core Blockchain Testnet",
  nativeCurrency: {
    name: "Test Core",
    symbol: "tCORE",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.test2.btcs.network"],
    },
    public: {
      http: ["https://rpc.test2.btcs.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Core Testnet Scan",
      url: "https://scan.test2.btcs.network",
    },
  },
  testnet: true,
};

// Only create config on client side
const createConfig = () => {
  if (!isBrowser) {
    return null;
  }

  return getDefaultConfig({
    appName: "Hyped Launch",
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
    chains: [coreMainnet],
    ssr: false,
  });
};

export default createConfig;

// Custom RainbowKit theme
export const customTheme = darkTheme({
  accentColor: "#97fce4",
  accentColorForeground: "#1a2f2e",
  borderRadius: "medium",
  fontStack: "system",
  overlayBlur: "small",
});

// Update colors to match our theme
customTheme.colors.actionButtonBorder = "#33a085";
customTheme.colors.actionButtonBorderMobile = "#33a085";
customTheme.colors.actionButtonSecondaryBackground = "#1a2f2e";
customTheme.colors.closeButton = "#97fce4";
customTheme.colors.closeButtonBackground = "#1a2f2e";
customTheme.colors.connectButtonBackground = "#97fce4";
customTheme.colors.connectButtonBackgroundError = "#ff6b6b";
customTheme.colors.connectButtonInnerBackground = "#1a2f2e";
customTheme.colors.connectButtonText = "#ffffff";
customTheme.colors.connectButtonTextError = "#ffffff";
customTheme.colors.connectionIndicator = "#97fce4";
customTheme.colors.downloadBottomCardBackground = "#1a2f2e";
customTheme.colors.downloadTopCardBackground = "#2a4f4e";
customTheme.colors.error = "#ff6b6b";
customTheme.colors.generalBorder = "#33a085";
customTheme.colors.generalBorderDim = "#2a4f4e";
customTheme.colors.menuItemBackground = "#1a2f2e";
customTheme.colors.modalBackdrop = "rgba(26, 47, 46, 0.8)";
customTheme.colors.modalBackground = "#1a2f2e";
customTheme.colors.modalBorder = "#33a085";
customTheme.colors.modalText = "#ffffff";
customTheme.colors.modalTextDim = "#b3b3b3";
customTheme.colors.modalTextSecondary = "#97fce4";
customTheme.colors.profileAction = "#97fce4";
customTheme.colors.profileActionHover = "#7ee8d0";
customTheme.colors.profileForeground = "#1a2f2e";
customTheme.colors.selectedOptionBorder = "#97fce4";
customTheme.colors.standby = "#97fce4";
