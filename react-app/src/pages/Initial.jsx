import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../components/tools/Box';
const Container = styled.div`
  flex-grow:1;
  display:flex;
  justify-content: center;
  padding-top: 10%;
`;
const Point = styled.p`
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
  const navigate = useNavigate()
  useEffect(() => {
    console.log(navigate)
  }, []);
  
  return <Container>
    <Box title='All done!'>
    <Point>Your final score is 9.</Point>
    <Label>Enter initials:</Label>
    <Input/>
    <Button>Submit</Button>
    </Box>
  </Container>;
};


export default Initial;
