import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getTransactions from "actions/transactions/getTransactions";

import TotalBalance from "components/TotalBalance";
import TransactionForm from "components/TransactionForm";
import TransactionTable from "components/TransactionTable";
import "./styles/index.scss";

import { isEmpty } from "lodash";

const App: React.FC<any> = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(
    (state: any) => state.transactions.collection
  );

  useEffect(() => {
    isEmpty(transactions) && dispatch(getTransactions());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <TotalBalance />
      <TransactionForm />
      <TransactionTable />
    </div>
  );
};

export default App;
