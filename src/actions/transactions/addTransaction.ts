import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { Transaction } from "types";

import { Actions } from "reducers/transactions/types";

const addTransaction = (
  transaction: Transaction
): ThunkAction<void, null, null, Action<string>> => async (dispatch) => {
  dispatch({
    type: Actions.ADD_TRANSACTION,
    payload: transaction,
  });
};

export default addTransaction