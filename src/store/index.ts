import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers";

export const configureStore = () => {
  const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: [],
  };

  const middlewares: any = [thunk, logger];

  const persistedReducer = persistReducer(persistConfig, rootReducer as any);

  const store = createStore(persistedReducer, applyMiddleware(...middlewares));

  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
