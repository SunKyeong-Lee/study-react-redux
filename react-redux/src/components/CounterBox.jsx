import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, change } from "../modules/counter";  // 액션 생성함수 임포트

const CounterBox = () => {
  // useSelector를 통해서 state의 원하는 값을 가져올 수 있다.
  const number = useSelector((state) => (state.counter.number));
  const changeNum = useSelector((state) => (state.counter.changeNum));

  // useDispatch를 통해서 사용할 함수를 가져옴
  const dispatch = useDispatch();

  // Callback함수를 이용해서 함수 새로 만듦 방지
  const onChange = useCallback((e)=> dispatch(change(e.target.value)), [dispatch]);

  return (
    <div>
      <h1>카운트입니다</h1>

      <h3>number : {number}</h3>
      {/* 
        dispatch를 통해 { type: "액션" }을 전달해서 사용
        >>> counter의 리듀서 함수로 가서 같은 타입을 찾은 후 실행
        >>> 객체값을 직접 입력할 경우 오타 및 실수가 있을 수 있어
        값을 변경하지 않고 사용하기 위해 counter에서 가져와서 사용
      */}
      <button onClick={() => { dispatch(increase()) }}>증가 + 1</button>
      <button onClick={() => { dispatch({ type: "DECREASE" }) }}>감소 - 1</button>

      <h3>changeNum : {changeNum}</h3>
      <p>changeNum 값을 바꿀 input</p>
      <input type="text" onChange={(e)=>{ dispatch({type:"CHANGE", payload: e.target.value}) }} />
      <input type="text" onChange={(e)=>{ dispatch( change(e.target.value) )}}/>
      {/* 익명함수, 화살표 함수로 작성시 렌더될 때마다 함수를 다시 생성 > Callback으로 지정 */}
      <input type="text" onChange={ onChange }/>
    </div>
  );
};

export default CounterBox;
