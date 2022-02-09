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
  const [time, setTime] = useState(null);
const handlePointChange = (v) => {
  setTime(v)
};
  

  return (
    <BrowserRouter>
    <Container>
      <Navbar time={time} />
      <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/quiz" element={<Quizz onPointChange={handlePointChange} />} exact />
      <Route path="/addInitial" element={<Initial />} exact />
      <Route path="/highscores" element={<Highscores/>} exact />
      <Route path="*" element={<Navigate replace to="/"/>} />
      </Routes>
    </Container>
    </BrowserRouter>
  );
}

export default App;
