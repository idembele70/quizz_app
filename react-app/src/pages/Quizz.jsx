import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../components/tools/Box';
import { mobile } from '../components/tools/responsive';
const Container = styled.div`
  flex-grow:1;
  display:flex;
  justify-content: center;
  align-items: start;
  `;
const BoxContainer = styled.div`
width: auto;
min-height: 250px;
display:flex;
align-items: center;
justify-content: center;
padding-top: 10%;
${mobile({padding: "10% 10px 0"})}
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
opacity:${props => props.opacity};
`;
const Quizz = ({onPointChange}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [questions, setQuestions] = useState([{
    questionText: String(),options: [], answer:""
  }]);
  const [qIndex, setQIndex] = useState(0);
  const [response, setResponse] = useState(false);
  const [point, setPoint] = useState(50);
  const timer = useRef(null)
  const [showResponse, setShowResponse] = useState(false);
  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setQuestions(data.questions))
      .catch(err => console.error("Error while fetching quizz in Quizz.jsx", err))
  }, []);
  const handleResponse = (res = false) => {
    setShowResponse(true)
    if(qIndex + 1 >= questions.length){
      navigate("/addInitial", {state : {point}})
    } else {
      if(!res){
        clearInterval(timer.current)
        setPoint(p=>p > 10 ? p-10 :0)
      }
      setResponse(res)
      setTimeout(() => {
        setShowResponse(false)
        setQIndex(qIndex +1)
      }, 500);
    }
  };
  const { questionText,options,answer } = questions[qIndex];
  useEffect(() => {
    onPointChange(point)
    if(point > 0)
    {
    timer.current = setInterval(() => {
      setPoint(point - 1)
    }, 1000);
  } else {
    navigate("/addInitial", {state : {point}})
  }
      return ()=>{
        clearInterval(timer.current)
      }
  }, [timer,point,onPointChange, navigate]);
  
  return <Container>
    <BoxContainer>
      {
        <Box title={questionText}>
          {options?.map((option,idx) =>
            <Question disabled={showResponse} key={option+idx} onClick={() => handleResponse(option === answer)} >{option}</Question>
          )}
          <Hr display={showResponse}/>
          <Response opacity={showResponse ? 1 : 0}>{response ? "Correct" : "Incorrect"}</Response>
        </Box>
          }
    </BoxContainer>
  </Container>;
};

export default Quizz;
