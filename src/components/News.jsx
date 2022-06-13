import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
const Card = styled.div`
  max-width: 600px;
  box-shadow: 1px 0px 4px 2px rgba(0, 0, 0, 0.14);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;
const Button = styled.button`
  margin-top: 10px;
  border: none;
  width: 70px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid royalblue;
  background-color: ${(props) => (props.contained ? 'white' : 'royalblue')};
  color: ${(props) => (props.contained ? 'royalblue' : 'white')};
  transition: background-color 0.2s;
  &:hover {
    background-color: royalblue;
    color: white;
  }
  &:active {
    transform: scale(0.98);
  }
`;
function News({ headLine, abstract, date }) {
  const dispatch = useDispatch();
  const clipped = useSelector((state) => state.addClipReducer);

  const handleAddClip = (date, headLine, abstract) => {
    dispatch({ type: 'addCLIP', payload: { date, headLine, abstract } });

    // if (!clip.includes(date)) {
    //   setClip((item) => [...item, date]);
    // } else {
    //   setClip(clip.filter((item) => date !== item));
    // }
  };
  return (
    <Card>
      <h2>{headLine}</h2>
      <figure>{date}</figure>
      <div>{abstract}</div>
      <Button
        type='button'
        onClick={() => {
          handleAddClip(date, headLine, abstract);
        }}
        contained={clipped.isClip}
      >
        {/* {!clip.includes(date) ? 'Clip' : 'UnClip'} */}
      </Button>
    </Card>
  );
}

export default News;
