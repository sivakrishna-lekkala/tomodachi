import React, { useState, useEffect, useLayoutEffect } from "react";
import ConnectButton from "../connectButton/connectButton";
import { useConnectedMetaMask, useMetaMask } from "metamask-react";
import { toast } from "react-toastify";
import AccountDetails from "../acountDetails/acountDetails";
import Mint from "../mint/mint";
import Banner from "../banner/banner";
import PendingTransaction from "../pendingTransaction/pendingTransaction";
import "./style.css";
import PropagateLoader from "react-spinners/PropagateLoader";

const Home = () => {
  const { status, connect, account } = useMetaMask();
  const [accountName, setAccountName] = useState();
  const [mintCount, setMintCount] = useState(0);
  const [totalMinCount, setTotalMinCount] = useState(0.0);

  useEffect(() => {
    let firstLetters = account ? account.substring(0, 8) : "";
    let lastFiveLetters = account ? account.substring(account.length - 7) : "";
    setAccountName(firstLetters + "......." + lastFiveLetters);
  }, [account]);

  const [stateStatus, setStateStatus] = useState("");

  useEffect(() => {
    setStateStatus(status);
  }, [status]);

  useEffect(() => {
    async function listenMMAccount() {
      window.ethereum.on("accountsChanged", async function () {
        window.location.reload();
      });
    }
    listenMMAccount();
  }, []);
  const onMintDecress = () => {
    if (mintCount > 0) {
      setMintCount(mintCount - 1);
    }
  };
  const onMintIncress = () => {
    setMintCount(mintCount + 1);
  };
  useEffect(() => {
    if (mintCount > 0) {
      setTotalMinCount((mintCount * 0.085).toFixed(3));
    } else {
      setTotalMinCount(0.0);
    }
  }, [mintCount]);
  const [isMint, setIsMint] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const onMintClick = () => {
    setIsMint(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  if (status === "initializing") {
    return (
      <div className="tomodachi">
        <PropagateLoader color="rgb(54, 215, 183)" loading={true} size={20} />
      </div>
    );
  }
  return (
    <div className="tomodachi">
      {status !== "connected" ? (
        <>
          <Banner />
          <ConnectButton status={stateStatus} toast={toast} connect={connect} />
        </>
      ) : (
        <>
          <Banner isMint={isLoading} />
          <AccountDetails account={accountName} />
          {isMint ? (
            <Mint
              onMintDecress={() => onMintDecress()}
              mintCount={mintCount}
              totalMinCount={totalMinCount}
              onMintClick={() => onMintClick()}
              onMintIncress={() => onMintIncress()}
            />
          ) : (
            <PendingTransaction transactionStatus={isLoading} />
          )}
        </>
      )}
    </div>
  );
};
export default Home;
