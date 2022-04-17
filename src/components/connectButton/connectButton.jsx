import React from "react";
import "./style.css";

const ConnectButton = (props) => {
  const { status, toast, connect } = props;

  return (
    <button
      className="connectWallet"
      onClick={() => {
        if (status === "unavailable")
          toast.error("Metamask not installed pls intstall", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        connect();
      }}
    >
      Connect Wallet
    </button>
  );
};
export default ConnectButton;
