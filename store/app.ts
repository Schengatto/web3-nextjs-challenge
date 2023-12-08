import Web3 from "web3";
import { create } from "zustand";

type AppStore = {
    web3: Web3 | null;
    accountAddress: string | null;
    contract: any;
    tokenAddress: string;
    tokenBalance: number;
    lastTransactionTime: number;
    setWeb3: (web3: Web3) => void;
    setAccountAddress: (accountAddress: string | null) => void;
    setContract: (contract: any) => void;
    setTokenAddress: (tokenAddress: string) => void;
    setTokenBalance: (tokenBalance: number) => void;
    setLastTransactionTime: (lastTransactionTime: number) => void;
};

export const useAppStore = create<AppStore>((set) => ({
    web3: null,
    accountAddress: null,
    contract: null,
    tokenAddress: "",
    tokenBalance: 0,
    lastTransactionTime: 0,
    setWeb3: (web3: Web3) => set({ web3 }),
    setAccountAddress: (accountAddress: string | null) => set({ accountAddress }),
    setContract: (contract: any) => set({ contract }),
    setTokenAddress: (tokenAddress: string) => set({ tokenAddress }),
    setTokenBalance: (tokenBalance: number) => set({ tokenBalance }),
    setLastTransactionTime: (lastTransactionTime: number) => set({ lastTransactionTime }),
}));
