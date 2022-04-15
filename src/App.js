import "./App.css";
import Home from "./components/home/home";
import { MetaMaskProvider } from "metamask-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <MetaMaskProvider>
        <Home />
        <ToastContainer />
      </MetaMaskProvider>
    </div>
  );
}

export default App;
