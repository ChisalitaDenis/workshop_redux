import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
// Imports: Redux Root Reducer
import rootReducer from "../reducers/index";
// Imports: Redux Root Saga
import { rootSaga } from "../saga/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, createLogger())
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export { store };
