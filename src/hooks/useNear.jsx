import * as nearAPI from "near-api-js";

export const useNear = async () => {
  const { keyStores, connect, WalletConnection } = nearAPI;
  const keyStore = new keyStores.BrowserLocalStorageKeyStore();

  const config = {
    networkId: "testnet",
    keyStore, // optional if not signing transactions
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
  };

  // connect to NEAR
  const near = await connect(config);

  const wallet = new WalletConnection(near);

  const contract = new nearAPI.Contract(
    wallet.account(), // the account object that is connecting
    "nft.cklzero.testnet",
    {
      viewMethods: ["nft_token"],
    }
  );
  // console.log(contract);

  const res = await contract.nft_token({ "token_id": "token-1" });
  // console.log(res);

  return wallet;
};
