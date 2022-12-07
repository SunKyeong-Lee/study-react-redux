import { createSlice } from "@reduxjs/toolkit";

// 바깥에 초기값 작성 가능 
// const initialState = {...}

// createSlice로 Slice를 만듬
// name(이름), initialState(초기값), reducer(함수) 값을 넣는다.
export const counter = createSlice({
  name: "counter", // Slice 이름
  initialState: {  // 초기값, 바깥에 작성했다면 initialState, reducers: {...}
    id: 1,
    value: 4,
  },
  // 실행할 reducer > 객체형태로 익명함수를 할당해서 사용
  reducers: {
    increment: (state) => {
      // 툴킷을 이용하면 상태보존이 되기 때문에, 값에 바로 접근해서 수정 가능
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      // 외부에서 값을 들고 오고 싶을 때, action.payload를 통해 들고옴
      state.value += action.payload;
    },
  },
});

// 액션타입을 함수로 만들어서 내보내기
export const { increment, incrementByAmount } = counter.actions;

// thunk
// 툴킷에서는 thunk가 내장되어있기 때문에 설치하지 않고 사용 가능
// 리덕스에서 thunk를 사용하는 방식과 동일하게 사용 : 함수형으로 작성
// thunk로 작성한 함수는 액션함수를 사용하는 것과 동일하게 사용 : dispatch(incrementAsync())
export const incrementAsync = () => (dispatch) => {
  // counter.actions을 통해 내보내준 increment를 함수형식으로 작성해서 넣어줌
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
};

// 디스패치를 따로 내보내줌
export default counter.reducer;
