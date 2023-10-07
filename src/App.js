import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.js";
import "./App.css";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
