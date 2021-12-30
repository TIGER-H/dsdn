const { abi: contractABI } = require("./MyNFT.json");
const contractAddress = "0xaC76Ac9995eb52AaDA526F53333942E49eC9A206";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const alchemyKey =
  "https://polygon-mumbai.g.alchemy.com/v2/r4_cc2y9NtTPYRpExJKFHpx_G28fzFsW";
const web3 = createAlchemyWeb3(alchemyKey);

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export async function loadContract() {
  return new web3.eth.Contract(contractABI, contractAddress);
}

export async function mintNFT(tokenURI, contract, PUBLIC_KEY) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce
  console.log(nonce);

  const nftContract = contract;
  //the transaction
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 5000000,
    maxPriorityFeePerGas: 1999999987,
    data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
  };

  const signature = await web3.eth.personal.sign(
    "Your code gonna be a NFT!",
    PUBLIC_KEY,
    "" // MetaMask will ignore the password argument here
  );

  // const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  const transactionReceipt = await web3.eth.sendTransaction(
    // signedTx.rawTransaction
    tx
  );

  console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
}
