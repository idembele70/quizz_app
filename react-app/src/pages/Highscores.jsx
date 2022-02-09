import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../components/tools/Box';
import { mobile } from '../components/tools/responsive';
import { getAllScore, resetScore } from '../services/quizzServices';
const Container = styled.div`
  flex-grow:1;
  display:flex;
  justify-content: center;
  align-items: flex-start;
`;
const BoxContainer = styled.div`
width: auto;
min-height: 250px;
display:flex;
align-items: start;
justify-content: center;
padding-top:10%;
${mobile({padding: "10% 10px 0"})}
`;
const List = styled.ul`
  list-style-type: decimal;
  
`;
const ListItem = styled.li`
text-align: left;
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
const EmptyScore = styled.h3`
  
`;
const Highscores = () => {
  const navigate = useNavigate()
  const [scores, setscores] = useState([])
  useEffect(() => {
    if (getAllScore())
      setscores(getAllScore())
    else
      setscores([])
  }, [])
  return <Container>
    <BoxContainer>
      <Box title="Highscores">
        {scores.length ?
          <List>{
            scores?.sort(
              (a, b) => b.score - a.score
            )?.map(
              ({ initial, score }, idx) => (
                <ListItem key={initial + idx}>
                  {initial.toUpperCase()} - {score}
                </ListItem>
              )
            )}
          </List> : <EmptyScore>Nothing found</EmptyScore>}
        <Button onClick={() => navigate("/")}>Go Back</Button>
        <Button onClick={() => { resetScore(); window.location.reload() }}>Clear Highscores</Button>
      </Box>
    </BoxContainer>
  </Container>;
};

export default Highscores;

