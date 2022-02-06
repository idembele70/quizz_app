import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../components/tools/Box';
const Container = styled.div`
  flex-grow:1;
  display:flex;
  justify-content: center;
margin-top: 40px;
`;
const BoxContainer = styled.div`
width: auto;
min-height: 250px;
display:flex;
align-items: center;
justify-content: center;
padding-bottom:20%;
`;
const List = styled.ul`
  
`;
const ListItem = styled.li`
  list-style-type: decimal;
`;
const Button = styled.button`
  background-color: #218380;
  padding: 10px;
  color: #FFFFFF;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  &:first-of-type{
    margin-right: 5px;
  }
`;
const Highscores = () => {
  const navigate = useNavigate()
  const [scores, setscores] = useState([
    {name:"SJ", point: 43},
    {name: "AJ", point: 38}])
  useEffect(() => {
    setscores(scores.sort(
      (a,b)=>b.point-a.point
    ))
  }, [scores]);
  console.log(scores)
  return <Container>
    <BoxContainer>
    <Box title="Highscores">
  <List>{
    scores.map(
      ({name,point},idx)=>(
        <ListItem key={name+idx}>
          {name}-{point}
        </ListItem>
      )
    )}
  </List>
  <Button onClick={()=>navigate("/")}>Go Back</Button>
  <Button onClick={()=>console.log("clicked")}>Clear Highscores</Button>
    </Box>
    </BoxContainer>
  </Container>;
};

export default Highscores;