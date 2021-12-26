import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { useEffect } from "react";
import myContract from "./contracts/MyNFT.json";

function App() {
  const web3 = createAlchemyWeb3();
  console.log(myContract);
  async function loadContract() {
    // return new web3.eth.Contract(contractABI, contractAddress);
  }

  useEffect(() => {
    loadContract();
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <div id="app-modal" />
    </div>
  );
}

export default App;
