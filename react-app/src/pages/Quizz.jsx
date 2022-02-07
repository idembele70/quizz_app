import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../components/tools/Box';
const Container = styled.div`
  flex-grow:1;
  display:flex;
  justify-content: center;
  padding-top: 10%;
`;
const PointContainer = styled.h2`
  color:#218380;
  text-align: center;
`;
const BoxContainer = styled.div`
`;
const Question = styled.button`
  background-color:#218380;
  display: block;
  width: 100%;
  border: none;
  text-align: left;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor:pointer;
  transition: background-color 350ms ease;
  &:hover {
    background-color:#21838083;
  }
  &:not(:last-of-type){
    margin-bottom: 5px;
  }
`;
const Hr = styled.hr`
opacity:${props => props.display ? 1:0};
`;
const Response = styled.span`
opacity:${props => props.display ? 1:0};
`;
const Quizz = ({ onBadResponse, finish, setFinish }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [questions, setQuestions] = useState([{
    questionText: String(),options: [], answer:""
  }]);
  const [qIndex, setQIndex] = useState(0);
  const [point, setPoint] = useState(0);
  const [response, setResponse] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setQuestions(data.questions))
      .catch(err => console.error("Error while fetching quizz in Quizz.jsx", err))
  }, []);
  const handleResponse = (response = false) => {
    setShowResponse(true)
    if(qIndex + 1 >= questions.length){
      return setFinish(true)
    }
    if (response) {
      setPoint(point+10)
      setResponse(true)
    }
    else{
      setPoint(point + (point > 10 ? -10 : 0))
      onBadResponse(true)
      setResponse(false)
    }
    setTimeout(() => {
      setQIndex(qIndex + 1)
      setShowResponse(false)
    }, 2000);
  };
  const { questionText,options,answer } = questions[qIndex];
  useEffect(() => {
    if(finish){
      navigate("/addInitial", {state : {point}})
    }
    return ()=>{
      setFinish(true)
    }
  }, [finish, navigate,location]);
  
  return <Container>
    <BoxContainer>
    <PointContainer>{point}</PointContainer>
      {
        <Box title={questionText}>
          {options?.map((option,idx) =>
            <Question disabled={showResponse} key={option+idx} onClick={() => handleResponse(option === answer)} >{option}</Question>
          )}
          <Hr display={showResponse}/>
          <Response display={showResponse}>{response ? "Correct" : "Incorrect"}</Response>
        </Box>
          }
    </BoxContainer>
  </Container>;
};

export default Quizz;
