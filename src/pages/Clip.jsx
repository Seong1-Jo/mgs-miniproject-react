import React from 'react';
import { useSelector } from 'react-redux';
function Clip() {
  const clipped = useSelector((state) => state.addClipReducer.clip);
  console.log(clipped);
  return (
    <div>
      <hr />
      {clipped.map((news) => {
        return <div key={news.headLine}>{news.headLine}</div>;
      })}
    </div>
  );
}

export default Clip;
