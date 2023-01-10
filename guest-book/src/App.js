import "./App.css";
import { Routes, Route } from "react-router-dom";
import Memo from "./pages/Memo";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/memo" element={<Memo />} />
    </Routes>
  );
}

export default App;
