import React, { useEffect, useState } from "react";
import MintButton from "../mintButton/mintButton";
import "./style.css";

const Mint = (props) => {
  const {
    onMintDecress,
    mintCount,
    totalMinCount,
    onMintClick,
    onMintIncress,
  } = props;
  return (
    <>
      <div className="mint">
        <button
          className={[
            "mint-decress",
            mintCount === 0 ? "" : "mint_decress-enabled",
          ].join(" ")}
          onClick={() => onMintDecress()}
          disabled={mintCount === 0 ? true : false}
        >
          <span></span>
        </button>
        <div className="mint-count">{mintCount}</div>
        <button className="mint-incress" onClick={() => onMintIncress()}>
          +
        </button>
      </div>
      <div className="mint-available">
        <div className="mint-availableCount">{mintCount} available</div>
        <div className="brd-right"></div>
        <div className="mint-availableTotal">
          {totalMinCount}{" "}
          <div className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          total
        </div>
      </div>
      <div>
        <MintButton
          heading={mintCount > 0 ? "Mint" : "SELECT QUANTITY"}
          isDisabled={mintCount > 0 ? false : true}
          mintClassName={mintCount > 0 ? "mint-active" : "mint-disabled"}
          onMintClick={() => onMintClick()}
        />
      </div>
    </>
  );
};
export default Mint;
