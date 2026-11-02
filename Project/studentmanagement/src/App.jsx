import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Register from "./components/Register";



function App() {
  return (
       <Home/>,
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Register />} />

        

        <Route path="/register" element={<Register />} />

        

      </Routes>
    </BrowserRouter>
  );
}

export default App;