import React from 'react';
import { useSelector } from 'react-redux';
function Clip() {
  const clip = useSelector((state) => state.addClipReducer);
  console.log(clip);
  return (
    <div>
      <hr />
      {clip.date}
    </div>
  );
}

export default Clip;
