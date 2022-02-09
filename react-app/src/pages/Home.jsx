import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../components/tools/Box';
import { mobile } from '../components/tools/responsive';
const Container = styled.div`
  flex-grow:1;
  display:flex;
  justify-content: center;
  align-items: flex-start;
  `;
const BoxContainer = styled.div`
padding-top: 10%;
  min-height: 250px;
  display:flex;
  align-items: center;
  justify-content: center;
  ${mobile({paddingLeft: 10, paddingRight: 10 })}
`;
const Paragrah = styled.p``;
const Button = styled.button`
  background-color: #218380;
  padding: 10px;
  color: #FFFFFF;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Home = ({setStart, setFinish}) => {
  const title = "Coding Quizz Challenge"
  const navigate = useNavigate()
  const handleStart = () => {
    navigate("/quiz")
    setStart(true)
    setFinish(false)
  };
  
  return <Container>
    <BoxContainer>
    <Box title={title} >
      <Paragrah>Try to answer to following code-related questions within the time limit.</Paragrah>
      <Paragrah>Keep in min that incorrect answers will penalize your score/time by ten seconds!</Paragrah>
      <Button onClick={handleStart}>Start Quizz</Button>
    </Box>
    </BoxContainer>
  </Container>;
};

export default Home;
