import { combineReducers, Reducer } from "redux";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import sessionStorage from "redux-persist/lib/storage/session";
import transactions from "./transactions";
import account from "./account";

const sessionPersistor = (
  reducer: Reducer,
  key: string,
  whitelist: string[]
) => {
  const config = {
    key,
    storage: sessionStorage,
    stateReconciler: autoMergeLevel2,
    whitelist,
  };
  return persistReducer(config, reducer);
};

const reducers = {
  transactions: sessionPersistor(transactions as Reducer, "transactions", [
    "collection", "status",
  ]) as typeof transactions,
  account: sessionPersistor(account as Reducer, "account", [
    "balance",
  ]) as typeof account,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
