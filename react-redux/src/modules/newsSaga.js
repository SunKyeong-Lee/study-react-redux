// 리덕스 사가 사용시 반드시 import
import { put, takeEvery } from "redux-saga/effects";

// 초기값
const initalState = {
  loading: false,
  news: null,
};

// saga를 통해 비동기 함수 작성 - 전부 제너레이터 함수
function* getNewsSaga() {
  yield put({ type: "START_LOAD" });

  // saga에서 바로 비동기(asyn를 붙일 수 없으므로 안이나 밖에 따로 함수 생성)
  async function getData() {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=kr&apiKey=c4c09dd0ba45435cb60e93cd10259c2a"
    );
    const data = await response.json();
    return data;
  }
  // saga에서 제공해주는 call : call(getData) 작성 동일한 결과
  const data = yield getData();

  yield put({ type: "GET_NEWS", payload: data.articles });
  yield put({ type: "END_LOAD" });
}

// 모든 사가를 연결하기 위한 함수
export function* newsSaga() {
  yield takeEvery("newsSage", getNewsSaga);
}

// 사가를 실행할 액션 함수
export const getSagaNews = () => ({ type: "newsSaga" });

// 리듀서
const newsSagaReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_NEWS":
      // 값이 다 들어왔다고 생각하고 작성
      return { ...state, news: action.payload };
    case "START_LOAD":
      return { ...state, loading: true };
    case "END_LOAD":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default newsSagaReducer;
