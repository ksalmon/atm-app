import React from "react";
import { useSelector } from "react-redux";

const TotalBalance: React.FC<any> = () => {
  const account = useSelector((state: any) => state.account);

  return (
    <>
      <h1>Account Balance</h1>
      <div className={`total-balance ${account.balance < 100 ? 'low-balance' : 'normal-balance'}`}>${account.balance}</div>
    </>
  );
};

export default TotalBalance;
