import React from "react";
import "./style.css";

const MintButton = (props) => {
  const { heading, onMintClick, mintClassName, isDisabled } = props;
  return (
    <button
      className={[mintClassName, "mint-btn"].join(" ")}
      onClick={() => onMintClick()}
      disabled={isDisabled}
    >
      {heading}
    </button>
  );
};
export default MintButton;
