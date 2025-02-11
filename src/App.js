import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import GlobalStyle from "./pages/GlobalStyles";
import Main from "./pages/Main";
import Passed from "./pages/Passed";
import data from "./data.json";
import Fail from "./pages/Fail";

function App() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main dataList={dataList} />} />
        <Route path="/check2/:Id" element={<Passed dataList={dataList} />} />
        <Route path="/check1/:Id" element={<Fail dataList={dataList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
