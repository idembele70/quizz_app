import styled from "styled-components";
import Navbar from "./components/tools/Navbar";
import Home from "./pages/Home";
import {BrowserRouter, Routes,Route,To, Navigate  } from 'react-router-dom';
import Highscores from "./pages/Highscores";
import Quizz from "./pages/Quizz";
import { useEffect, useState } from "react";
import Initial from "./pages/Initial";
;

const Container = styled.div`
  display:flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;
function App() {
  const [value, setvalue] = useState(0);
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const handleBadResponse = (val) => {
    setvalue(val)
};
const handleStart = (val) => {
  setStart(val)
};
const handleFinish = (val) => {
  setFinish(val)
};

  return (
    <BrowserRouter>
    <Container>
      <Navbar value={value} onBadResponse={handleBadResponse} start={start} setStart={handleStart} finish={finish} setFinish={handleFinish} />
      <Routes>
      <Route path="/" element={<Home setStart={handleStart} setFinish={handleFinish}  />} exact />
      <Route path="/quiz" element={<Quizz onBadResponse={handleBadResponse} finish={finish} setFinish={handleFinish} />} exact />
      <Route path="/addInitial" element={<Initial />} exact />
      <Route path="/highscores" element={<Highscores/>} exact />
      <Route path="*" element={<Navigate replace to="/"/>} />
      </Routes>
    </Container>
    </BrowserRouter>
  );
}

export default App;
