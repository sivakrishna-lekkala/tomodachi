import React, { useState } from "react";
import Loading from "../../assets/images/loadingIcon.png";
import vector from "../../assets/images/vector.png";
import CompletedIcon from "../../assets/images/completed.png";
import "./style.css";
import PropagateLoader from "react-spinners/PropagateLoader";

const PendingTransaction = (props) => {
  const { transactionStatus } = props;

  return (
    <div className="pending-transaction">
      <div>
        {transactionStatus ? (
          <PropagateLoader color="rgb(54, 215, 183)" loading={true} size={20} />
        ) : (
          <img src={CompletedIcon} alt="Loading" className="completed-icon" />
        )}
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
