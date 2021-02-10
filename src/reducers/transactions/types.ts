export const Actions = {
  GET_TRANSACTIONS: "GET_TRANSACTIONS",
  ADD_TRANSACTION: "ADD_TRANSACTION",
  SET_LOADING: "SET_LOADING",
};

interface GetTransactionAction {
  type: typeof Actions.GET_TRANSACTIONS;
  payload: any;
}

export type TransactionActionTypes = GetTransactionAction;
