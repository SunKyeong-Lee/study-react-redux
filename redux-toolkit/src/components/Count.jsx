import { useDispatch, useSelector } from "react-redux";
import { increment, incrementAsync, incrementByAmount } from "../modules/counter";

const Count = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>카운트 : {count}</h1>
      <button onClick={() => {dispatch(increment());}}> +1 </button>
      <button onClick={() => {
        // incrementAsync()의 인수값으로 들어가는 값을 payload로 전달됨
        dispatch(incrementByAmount(10));
      }}> + 10 </button>
      <button onClick={() => {dispatch(incrementAsync());}}> 1초뒤 증가 +1 </button>
    </div>
  );
};

export default Count;
