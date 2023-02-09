import { useState } from "react";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import ResumePage from "./Components/ResumePage/ResumePage";

function App() {
  const [currentPage, setCurrentPage] = useState(JSON.parse(localStorage.getItem("currentPage")) || 1)

  return (
    <>
      {currentPage === 1 ? <HomePage setCurrentPage={setCurrentPage} /> : null}
      {currentPage === 2 ? <ResumePage setCurrentPage={setCurrentPage} /> : null}
    </>
  );
}

export default App;