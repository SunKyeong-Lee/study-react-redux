import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMemo, deleteMemo } from "../modules/memo";  // 임포트

const MemoBox = () => {
  const memolist = useSelector((state) => state.memo.memolist);
  // input 태그 2개를 만들어서 useState로 title과 text값 받아오기
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // useDispatch()를 통해서, 메모가 추가한 새로운 리스트 생성 > memo.js 모듈 생성
  const dispatch = useDispatch();

  // useCallback을 사용할 때, 입력값이 있다면 입력값에 따라 바뀔 수 있도록 추가
  // 매개변수로 받아오는 값은 고정되지 않음, 매개변수 외의 값은 전부 고정
  const memoAdd = useCallback(() => {
    dispatch( addMemo({ title: title, text: text }) );
  }, [dispatch, title, text]);

  const memoDelete = useCallback((id) => {
    dispatch( deleteMemo(id) );
  }, [dispatch]);

  return (
    <div>
      <p>제목</p>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <p>내용</p>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={memoAdd}>메모 추가</button>

      {memolist.map((memoitem) => (
        <div key={memoitem.id} className="memo-item">
          <h3>{memoitem.id}. {memoitem.title}</h3>
          <p>{memoitem.text}</p>
          <button onClick={() => { memoDelete(memoitem.id); }}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default MemoBox;
