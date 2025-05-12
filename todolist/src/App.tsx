import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        {/* 라우터 경로 파트트 */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
