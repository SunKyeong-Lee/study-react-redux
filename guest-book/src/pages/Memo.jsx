import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addmemo } from "../modules/memo";

const Memo = () => {
  const memolist = useSelector((state) => state.memolist);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const addMemo = (e) => {
    e.preventDefault();
    dispatch(addmemo({ name, text }));
    setName("");
    setText("");
  };

  return (
    <div className="memo-container">
      <h2>방명록을 작성해주세요</h2>
      <form onSubmit={addMemo}>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="내용을 작성하세요"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input type="submit" value="작성" />
      </form>
      {memolist.map((memo) => (
        <li key={memo.id}>
          <span>
            {memo.name} - {memo.date}
          </span>
          <div>{memo.text}</div>
        </li>
      ))}
    </div>
  );
};

export default Memo;
