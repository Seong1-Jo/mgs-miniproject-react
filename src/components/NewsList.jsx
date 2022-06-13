import React from 'react';
import styled from 'styled-components';
import News from './News';
import { useSelector } from 'react-redux';
const data = Array.from(Array(10), (_, i) => ({
  id: i,
  date: new Date().toUTCString() + i,
  headLine: 'Hello World ' + i,
  abstract:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam aut aperiam error reiciendis cupiditate quos, aspernatur magni hic temporibus voluptas mollitia nesciunt, dolorem, dicta animi sint ex. Nobis, aperiam.',
}));

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 768px) {
    max-width: 700px;
    justify-content: center;
  }
`;
function NewsList() {
  const clipped = useSelector((state) => state.searchReducer);
  return (
    <Container>
      {data.map((item) => {
        return (
          <News
            key={item.id}
            headLine={item.headLine}
            abstract={item.abstract}
            date={item.date}
          />
        );
      })}
    </Container>
  );
}

export default NewsList;
