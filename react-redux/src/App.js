import './App.css';
import CounterBox from './components/CounterBox';
import MemoBox from './components/MemoBox';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <CounterBox />
      <hr />
      <MemoBox />
      <hr />
      <News />
    </div>
  );
}

export default App;
