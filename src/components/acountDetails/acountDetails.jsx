import React from "react";
import "./style.css";

const AccountDetails = (props) => {
  const { account } = props;
  return (
    <div>
      <div className="account-msg">Welcome Friend</div>
      <div className="account-name">{account}</div>
    </div>
  );
};
export default AccountDetails;
