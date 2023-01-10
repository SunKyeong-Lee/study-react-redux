import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>홈 화면에 오신 것을 환영합니다</h1>
      <p>아래를 통해 방명록을 작성하실 수 있습니다.</p>
      <Link to="/memo">
        방명록 작성하기
        <span />
      </Link>
    </div>
  );
};

export default Home;
