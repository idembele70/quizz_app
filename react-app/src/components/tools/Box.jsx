import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  max-width: 655px;
  width:calc(100% - 70px);
  padding: 50px 35px;
  border-radius: 20px;
  box-shadow: 6px 3px 2px #b4b0b06f;
  border: 2px solid #6b6a6a6f;
`;
const Title = styled.h2`
`;
const Main = styled.div`
  
`;
const Box = ({title, children}) => {
  return <Container>
    <Title>{title}</Title>
    <Main>
    {children}
    </Main>
  </Container>;
};
Box.propTypes= {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default Box;
