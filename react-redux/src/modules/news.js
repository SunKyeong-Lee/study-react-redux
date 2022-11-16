// 초기 state 선언
// API로 값을 가져오는 경우에 데이터를 가져오는 속도가 느릴 수 있으므로 loading을 작성
const initalState = {
  loading: false,
  news: null,
};

// Thunk를 통해서 값을 받아오는 액션함수 작성
// thunk의 내용이 비동기 함수임을 알림
export const getNews = () => async (dispatch, getState) => {
  // 이 안에서 액션을 dispatch 할 수도 있고, get State를 사용하여 현재 상태도 조회할 수 있다.
  dispatch({ type: "START_LOAD" });

  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=kr&apiKey=c4c09dd0ba45435cb60e93cd10259c2a"
  );
  const body = await response.json();
  if (body.status == "ok") {
    dispatch({ type: "GET_NEWS", payload: body.ariles });
  }

  dispatch({ type: "END_LOAD" });
};
