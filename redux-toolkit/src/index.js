import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 리덕스 프로바이더를 가져옴 : Provider로 store을 저장
import { Provider } from "react-redux"; 
//store.js에서 작성한 값을 가져옴
import store from "./store"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/** 프로바이더로 감싸기 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
