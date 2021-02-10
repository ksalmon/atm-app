import { Actions, TransactionActionTypes } from "./types";
import { Transaction } from "types";

export interface TransactionState {
  collection: Transaction[];
  loading: boolean;
  status: null | number;
}

const initialState: TransactionState = {
  collection: [],
  loading: true,
  status: null,
};

const TransactionReducer = (
  state: TransactionState = initialState,
  action: TransactionActionTypes
): TransactionState => {
  switch (action.type) {
    case Actions.GET_TRANSACTIONS:
      return {
        ...state,
        collection: action.payload.transactions,
        status: action.payload.status,
        loading: false,
      };
    case Actions.ADD_TRANSACTION:
      return {
        ...state,
        collection: [...state.collection, action.payload],
      };
    case Actions.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default TransactionReducer
