import React from "react";
import Loading from "../../assets/images/loadingIcon.png";
import vector from "../../assets/images/vector.png";
import CompletedIcon from "../../assets/images/completed.png";
import "./style.css";

const PendingTransaction = (props) => {
  const { transactionStatus } = props;
  return (
    <div className="pending-transaction">
      <div>
        <img
          src={transactionStatus ? Loading : CompletedIcon}
          alt="Loading"
          className={[
            transactionStatus ? "loading-img" : "completed-icon",
          ].join(" ")}
        />
      </div>
      <div className="pendingTtraction-txt">
        <span>
          {transactionStatus ? "Pending transaction" : " View on etherscan"}
        </span>{" "}
        <img src={vector} alt="Info Icon" />
      </div>
    </div>
  );
};
export default PendingTransaction;
