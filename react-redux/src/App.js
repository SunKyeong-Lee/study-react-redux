import './App.css';
import CounterBox from './components/CounterBox';
import MemoBox from './components/MemoBox';
import News from './components/News';
import NewsSagaBox from './components/NewsSagaBox';

function App() {
  return (
    <div className="App">
      <CounterBox />
      <hr />
      <MemoBox />
      <hr />
      <News />
      <hr />
      <NewsSagaBox />
    </div>
  );
}

export default App;
