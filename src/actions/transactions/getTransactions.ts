import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { Actions } from "reducers/transactions/types";
import API from "data";

const getTransactions = (): ThunkAction<void, null, null, Action<string>> => async (
  dispatch
) => {
  const response = await API.get("", { timeout: 5000 });

  const payloadData = {
    transactions: response.data.transactions,
    status: response.status,
  };

  dispatch({
    type: Actions.GET_TRANSACTIONS,
    payload: payloadData,
  });
};

export default getTransactions
