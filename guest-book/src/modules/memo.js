const date = () => {
  const date = new Date();
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
};

const initalState = {
  memoId: 0,
  memolist: [],
};

function memo(state = initalState, action) {
  switch (action.type) {
    case "addMemo":
      const newMemo = {
        id: state.memoId,
        name: action.payload.name,
        text: action.payload.text,
        date: date(),
      };
      state.memoId++;
      return { ...state, memolist: state.memolist.concat(newMemo) };
    default:
      return state;
  }
}

export const addmemo = (memo) => ({ type: "addMemo", payload: memo });

export default memo;
