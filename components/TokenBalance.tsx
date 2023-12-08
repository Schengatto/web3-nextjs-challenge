import { FunctionComponent, useEffect, useState } from "react";
import { useAppStore } from "@/store/app";
import { EXAMPLE_TOKEN_ADDRESS, EXAMPLE_TOKEN_CONTRACT_ABI } from "@/configuration/contracts";

const TokenBalance: FunctionComponent = () => {
    const {
        tokenBalance,
        setTokenBalance,
        tokenAddress,
        accountAddress,
        web3,
        lastTransactionTime,
        setLastTransactionTime
    } = useAppStore();

    const [isExampleToken, setIsExampleToken] = useState<boolean>(false);

    useEffect(() => {
        const getTokenBalance = async () => {
            if (!accountAddress) return;

            const erc20tokenAbi = [{
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }] as const;

            const tokenContract = await new web3!.eth.Contract<typeof erc20tokenAbi>(erc20tokenAbi, tokenAddress);
            const balance = await tokenContract.methods.balanceOf(accountAddress).call({ from: accountAddress! });
            setTokenBalance(Number(balance));
        }
        setIsExampleToken(tokenAddress === EXAMPLE_TOKEN_ADDRESS);
        getTokenBalance();
    }, [accountAddress, tokenAddress, lastTransactionTime]);

    const getMoreExampleTokens = async () => {
        try {
            const testTokenContract = await new web3!.eth.Contract<typeof EXAMPLE_TOKEN_CONTRACT_ABI>(EXAMPLE_TOKEN_CONTRACT_ABI, EXAMPLE_TOKEN_ADDRESS);
            await testTokenContract.methods.mint(100).send({ from: accountAddress! });
            setLastTransactionTime(Date.now());
        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <>
            {web3
                ? (<div className="md:flex md:justify-between">
                    <div className="text-white-500">Your token balance is <b>{tokenBalance}</b>.</div>
                    {isExampleToken
                        && <div
                            className="text-green-500 hover:text-green-300 cursor-pointer"
                            onClick={getMoreExampleTokens}>
                            Get more example tokens!
                        </div>}
                </div>)
                : null
            }
        </>)
};

export default TokenBalance;