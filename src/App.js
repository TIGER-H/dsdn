import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <div id="app-modal" />
    </div>
  );
}

export default App;
