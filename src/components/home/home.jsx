import React from "react";
import ConnectButton from "../connectButton/connectButton";
import { useConnectedMetaMask, useMetaMask } from "metamask-react";
import { toast } from "react-toastify";

import "./style.css";

const Home = () => {
  const { status, connect, account, chainId, ethereum } = useMetaMask();
  const [accountName, setAccountName] = useState();

  useEffect(() => {
    let firstLetters = account ? account.substring(0, 5) : "";
    let lastFiveLetters = account ? account.substring(account.length - 5) : "";
    setAccountName(firstLetters + "......................." + lastFiveLetters);
  }, [account]);

  return (
    <div className="tomodachi">
      {status === "connected" ? (
        <div>coneccted</div>
      ) : (
        <ConnectButton
          status={status}
          toast={toast}
          connect={() => connect()}
        />
      )}
    </div>
  );
};
export default Home;
