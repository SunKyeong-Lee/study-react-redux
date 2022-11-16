// store : 리덕스에서 가져온 store (state와 dispatch)
// next() : action을 다음 미들웨어에게 전달하는 함수, next(action)
//          다음 미들웨어가 없다면 리듀서에게 액션을 전달 (dispatch로 넘겨줌)
//          next를 호출하지 않으면 액션이 무시처리되어 리듀서로 전달되지 않음
// action : dispath에서 액션
const loggerMiddleware = (store) => (next) => (action) => {
  // 액션의 상태를 남겨주는 역할
  console.group(action && action.type);
  console.log("이전상태", store.getState());
  console.log("액션", action);
  // next()를 통해서 액션을 실행해야지만 dispatch가 된다.
  next(action);
  console.log("다음상태", store.getState());
  console.groupEnd();
};

export default loggerMiddleware;

// 위의 코드를 풀어쓴 모습
const loggerMiddlewareFunc = function (store) {
  return function (next) {
    return function (action) {
      // 하고 싶은 작업...
    };
  };
};