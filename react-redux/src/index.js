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
import rootReducer from "./modules";         // rootReducer를 통해 한 번에 묶어서 사용 가능

// 미들웨어 작성 및 설치 후 추가
// import loggerMiddleware from './lib/loggerMiddleware';
import logger from "redux-logger";
import thunk from "redux-thunk";

// createStore를 이용하여 store 생성
// const store = createStore(counter);
// const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회

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
