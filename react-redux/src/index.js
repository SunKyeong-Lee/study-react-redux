import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 리덕스 프로바이더 추가
import { Provider } from "react-redux";
// store를 만들기위한 createStore 추가 : redux
// applyMiddleware를 통해 미들웨어 추가 가능
import { createStore, applyMiddleware } from "redux";

// import counter from "./modules/counter";  // store에 추가할 counter state와 action 
// rootReducer를 통해 한 번에 묶어서 사용 가능
import rootReducer, { rootSaga } from "./modules";

// 미들웨어 작성 및 설치 후 추가
// import loggerMiddleware from './lib/loggerMiddleware';
import logger from "redux-logger";
import thunk from "redux-thunk";
// saga는 미들웨어를 생성해서 연결해줘야 한다.
import createSagaMiddleware from "redux-saga";

// saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

// createStore를 이용하여 store 생성
// const store = createStore(counter);
// const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
// 여러 개의 미들웨어를 적용할 수 있다. - thunk 추가
// logger를 사용하는 경우, logger가 가장 마지막에 와야 한다. 
const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware, logger));
console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회
sagaMiddleware.run(rootSaga);  // 미들웨어를 추가한 후 실행


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 프로바이더로 감싸기 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
