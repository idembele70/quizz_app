import React, { useEffect, useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../components/tools/Box';
import { mobile } from '../components/tools/responsive';
import { addScore } from '../services/quizzServices';
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
padding-top: 10%;
${mobile({padding: "10% 10px 0"})}
`;
const Point = styled.p`
`;
const Form = styled.form`
  display:flex;
  flex-wrap: wrap;
  width: auto;
  justify-content: center;
  & > * {
   ${mobile({margin: 5})}
  }
`;
const Label = styled.label`
  
`;
const Input = styled.input`
  padding: 5px;
`;
const Button = styled.button`
  background-color:#218380;
  color: #FFFFFF;
  padding: 10px;
  border:none;
  outline: none;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 350ms ease-in;
  &:hover{
    background-color:#2183806a;
  }
`;
const Initial = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [info, setInfo] = useState({
    initial:"", score:0
  });
  useEffect(() => {
    if(Number.isNaN(location.state?.point)){
      navigate("/highscores")
    } else
    setInfo({...info,score:location.state?.point})
  }, []);

  const handleSubmit = () => {
    addScore(info)
    navigate("/highscores")
  };
  
  return <Container>
    <BoxContainer>
    <Box title='All done!'>
    <Point>Your final score is {info.score}.</Point>
    <Form onSubmit={handleSubmit}>
    <Label>Enter initials:</Label>
    <Input value={info.initial} name="initial" onChange={({target: {value,name}})=>setInfo({...info, [name]: value})}/>
    <Button >Submit</Button>
    </Form>
    </Box>
    </BoxContainer>
  </Container>;
};


export default Initial;
