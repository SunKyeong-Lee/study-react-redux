// useReducer의 형식과 유사 (초기값, 리듀서 함수)

// 초기값 : 리덕스에서 관리 할 상태 정의
const initalState = {
  number: 0,
  changeNum: 1,
};

// 액션 생성함수
// dispatch에 들어갈 { type : "액션" } 객체를 함수로 만들어서 내보내줌
// 주로 액션 타입은 대문자로, 액션 생성함수는 camelCase 로 작성
export const increase = () => ({ type: "INCREASE" }); // 리턴값 객체
export const decrease = () => ({ type: "DECREASE" });
// 화살표함수도 동일하게 매개변수의 값을 받아올 수 있다.
// 액션 안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있다.
export const change = (value) => ({ type: "CHANGE", payload: value });

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
