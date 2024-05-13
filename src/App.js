import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css'

const BulbContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 600px;
  width: 600px;
  justify-content: center;
  background-color: #4e7d91;
`;

const Bulb = styled.div`
  margin: 15px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${props => props.isOn? '#ffff00' : '#333'};
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const App = () => {
  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);

  const toggleBulb1 = () => {
    setIsOn1(!isOn1);
  };

  const toggleBulb2 = () => {
    setIsOn2(!isOn2);
  };

  return (
    <BulbContainer>
      <Bulb isOn={isOn1} />
      <Button onClick={toggleBulb1}>On/Off</Button>
      <Bulb isOn={isOn2} />
      <Button onClick={toggleBulb2}>On/Off</Button>
    </BulbContainer>
  );
};

export default App;
