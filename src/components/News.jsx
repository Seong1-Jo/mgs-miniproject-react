import React, { useCallback, useEffect, useState } from 'react';
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
  const [clip, setClip] = useState(false);
  const clipped = useSelector((state) => state.addClipReducer);

  // useEffect(() => {
  //   if (!clipped.clip.length) {
  //     setClip(true);
  //     console.log('마운트 됨 true ', clip);
  //   } else {
  //     if (!clipped.clip.some((storedate) => storedate.date === date)) {
  //       setClip(true);
  //       console.log('마운트 됨 true 22 ', clip);
  //     } else {
  //       setClip(false);
  //       console.log('마운트 됨 false 33 ', clip);
  //     }
  //   }
  // }, [clipped.clip, clip]);
  // const handleAddClip = useCallback(
  //   (date, headLine, abstract) => {
  //     const payload = {
  //       date,
  //       headLine,
  //       abstract,
  //     };

  //     if (!clipped.clip.length) {
  //       setClip(true);
  //       dispatch({ type: 'addCLIP', payload });
  //     } else {
  //       if (!clipped.clip.some(checkDate)) {
  //         setClip(true);
  //         dispatch({ type: 'addCLIP', payload });
  //       } else {
  //         setClip(false);
  //         dispatch({ type: 'UNCLIP', payload: { headLine } });
  //       }
  //     }
  //   },
  //   [checkDate, clipped.clip, dispatch]
  // );
  const handleAddClip = (date, headLine, abstract) => {
    const payload = {
      date,
      headLine,
      abstract,
    };
    // console.log(clipped.clip.some((storedate) => storedate.isClip));
    if (!clipped.clip.length) {
      dispatch({ type: 'addCLIP', payload });
    } else {
      if (!clipped.clip.some((storedate) => storedate.headLine === headLine)) {
        dispatch({ type: 'addCLIP', payload });
      } else {
        dispatch({ type: 'UNCLIP', payload: { headLine } });
      }
    }
  };

  return (
    <Card>
      <h2>{headLine}</h2>
      <figure>{date}</figure>
      <div>{abstract}</div>
      {clipped.clip.some((storedate) => storedate.headLine === headLine) &&
      clipped.clip.some((storedate) => storedate.isClip) ? (
        <Button
          type='button'
          onClick={() => {
            handleAddClip(date, headLine, abstract);
          }}
        >
          {/* {!clipped.clip.some((storedate) => storedate.date === date) && clip
          ? 'Clip'
          : 'UnClip'} */}
          UnClip
        </Button>
      ) : (
        <Button
          type='button'
          onClick={() => {
            handleAddClip(date, headLine, abstract);
          }}
        >
          {/* {!clipped.clip.some((storedate) => storedate.date === date) && clip
          ? 'Clip'
          : 'UnClip'} */}
          Clip
        </Button>
      )}
    </Card>
  );
}

export default News;
