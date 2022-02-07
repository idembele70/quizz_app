import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"
const Container = styled.header`
  background-color: #218380;
  color: #ffffff;
  height: 60px;
  flex-grow: 60px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;
const Left = styled.div`
display: flex;
align-items: baseline;
flex:1;
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
const Navbar = ({ value, onBadResponse, start, setStart, setFinish,finish }) => {
  const navigate = useNavigate()
  const [time, setTime] = useState(50);
  useEffect(() => {
    let timer = null
    if (time > 1) {
      timer = setInterval(() => {
        if (value) {
          setTime(time - 10);
          onBadResponse(false)
        } else
          setTime(time - 1);
      }, 1000);
    }
    else{
      setTime(0)
      setFinish(true)
    }
    return () => {
      clearInterval(timer)
    };
  }, [time, value]);
  useEffect(() => {
    if (start) {
      setTime(50)
      setStart(false)
      setFinish(false)
    }
    if(finish){
      setTime(0)
      setFinish(true)
    }
  }, [start, setStart, finish, setFinish]);

  return <Container>
    <Left>
      <Title onClick={() => navigate("/highscores")} >View Highscores</Title>
      <I className="fas fa-hand-point-left fa-lg" />
    </Left>
    <Right>Time: {time}</Right>
  </Container>;
};

export default Navbar;
