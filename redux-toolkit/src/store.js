import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counter"; // 작성한 모듈 임포트

// 리덕스에서 createStore와 동일한 역할
// 리덕스는 모듈이 따로 있다면 combine을 통해서 묶어줘야 하지만,
// 툴킷에서는 slice reducer를 자동으로 합침 (기능 통합)
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
