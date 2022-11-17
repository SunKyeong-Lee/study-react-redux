// 리덕스 사가 사용시 반드시 import
// saga를 사용해줄 때는 액션/디스패치에 관한 내용을 import해서 사용
import { put, delay, takeEvery } from "redux-saga/effects";

// useReducer의 형식과 유사 (초기값, 리듀서 함수)
// 초기값 : 리덕스에서 관리 할 상태 정의
const initalState = {
  number: 0,
  changeNum: 1,
};

// 액션 생성함수 : dispatch에 들어갈 { type : "액션" } 객체를 함수로 만들어서 내보내줌
// 주로 액션 타입은 대문자로, 액션 생성함수는 camelCase 로 작성
export const increase = () => ({ type: "INCREASE" }); // 리턴값 객체
export const decrease = () => ({ type: "DECREASE" });
// 화살표함수도 동일하게 매개변수의 값을 받아올 수 있다.
// 액션 안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있다.
export const change = (value) => ({ type: "CHANGE", payload: value });


/** 
 * thunk를 사용하여 비동기로 실행하는 액션함수를 만들 수 있다.
 * thunk의 형식을 사용했기 때문에, 바로 dispatch를 사용하는게 아니라 나중에 추가해서 사용할 수 있다.
 * thunk의 사용형태 : export const 함수이름 = () => (dispatch) => {}; 
 */
export const increaseAsync = () => (dispatch, getState) => {
  // 이 안에서 액션을 dispatch 할 수도 있고, get State를 사용하여 현재 상태도 조회할 수 있다.
  // dispatch를 실행하기 전에 진행할 내용 작성
  // dispatch를 통해서 액션 실행
  // : 액션은 매개변수로 들고오지 않았기 때문에 객체로 직접 입력해주거나
  //   이미 만들어둔 액션함수를 사용해서 실행

  // 위에 미리 작성한 액션 함수를 사용해서 전달
  setTimeout(() => { dispatch(increase()); }, 1000);
};

// thunk를 사용해서 비동기 함수인 setTimer 사용
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => { dispatch({ type: "DECREASE" })}, 2000);
};                             // 액션값을 객체로 전달


/**
 * saga를 이용한 비동기 액션 함수 사용하기
 * 리덕스 사가는 자바스크립트의 제너레이터 함수를 사용한다.
 * function* () {};
 * next()와 yield를 이용하여 함수를 부분 실행
 */
function* increaseSaga(action) {
  console.log(action);
  yield delay(1000);               // 1초 기다림
  yield put({ type: "INCREASE" }); // 액션을 실행(dispatch)
  // put() : 특정 액션을 디스패치 해줌
};

function* decreaseSaga() {
  yield delay(2000);
  yield put( decrease() );
};

// 만들어준 saga를 내보내주는 함수
export function* counterSaga() {
  // 액션을 모니터링 하는 함수 - takeEvery(), takeLatest()
  // takeEvery() : 특정 액션 타입에 대하여 디스패치되는 모든 액션을 처리
  // takeLatest() : 특정 액션 타입에 대하여 디스패치된 가장 마지막 액션만을 처리
  yield takeEvery("increaseAsync", increaseSaga);
  yield takeEvery("decreaseAsync", decreaseSaga);
}

// 리덕스 사가를 실행하기 위한 액션 함수 >> saga도 payload를 통해 값을 가져올 수 있다.
export const increaseSagaAsync = () => ({ type: "increaseAsync", payload: 10 });
export const decreaseSagaAsync = () => ({ type: "decreaseAsync" });


// 리듀서 함수
// state의 초기값을 initialState로 지정
function counter(state = initalState, action) {
  switch (action.type) {
    case "INCREASE":
      return { ...state, number: state.number + 1 };
      case "DECREASE":
      // e.target.value 의 타입은 문자열이기 때문에 숫자로 변환
      const num = parseInt(state.changeNum);
      return { ...state, number: state.number - num };
    case "CHANGE":
      return { ...state, changeNum: action.payload };
    default:
      return state;
  }
}

export default counter;
