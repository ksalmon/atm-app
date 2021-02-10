import {
  Actions as TransactionActions,
  TransactionActionTypes,
} from "../transactions/types";
import { Transaction } from "types";

import { sum } from "lodash";

export interface AccountState {
  balance: number;
}

const initialState: AccountState = {
  balance: 2000,
};

const calculateBalance = (balance: number, transactions: Transaction[]) => {
  const totalSum = sum(transactions.map((x) => x.amount));
  const float = balance - totalSum;
  return Math.round((float + Number.EPSILON) * 100) / 100 
};

const AccountReducer = (
  state: AccountState = initialState,
  action: TransactionActionTypes
): AccountState => {
  switch (action.type) {
    case TransactionActions.GET_TRANSACTIONS:
      return {
        ...state,
        balance: calculateBalance(state.balance, action.payload.transactions),
      };
    case TransactionActions.ADD_TRANSACTION:
      return {
        ...state,
        balance: state.balance - action.payload.amount,
      };
    default:
      return state;
  }
};

export default AccountReducer
