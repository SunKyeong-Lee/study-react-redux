import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";   // 리덕스 프로바이더 추가
import { createStore } from "redux";      // store를 만들기위한 createStore 추가 : redux
// import counter from "./modules/counter";  // store에 추가할 counter state와 action 
import rootReducer from "./modules";      // rootReducer를 통해 한 번에 묶어서 사용 가능

// createStore를 이용하여 store 생성
// const store = createStore(counter);
const store = createStore(rootReducer);
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
