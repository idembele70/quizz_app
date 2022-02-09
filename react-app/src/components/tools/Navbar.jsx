import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components"
import { mobile } from './responsive';
const Container = styled.header`
  background-color: #218380;
  color: #ffffff;
  height: 60px;
  flex-grow: 60px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  ${mobile({padding: "0 10px"})}
`;
const Left = styled.div`
display: flex;
align-items: baseline;
flex:2;
`;
const Title = styled.p`
margin: 0;
margin-right:5px;
cursor:pointer;
`;
const I = styled.i`
font-size:16px;
`;
const Right = styled.div`
  flex:1;
  text-align: end;
`;
const Navbar = ({ time }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const showTimer = location.state?.point || location.pathname.match(/quiz/ig)
  useEffect(() => {
  }, [time])
  return <Container>
    <Left>
      <Title onClick={() => { navigate("/highscores") }} >View Highscores</Title>
      <I className="fas fa-hand-point-left fa-lg" />
    </Left>
    <Right>Time: {showTimer ? time : null}</Right>
  </Container>;
};

export default Navbar;
