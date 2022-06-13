import React from 'react';
import { useSelector } from 'react-redux';
function Clip() {
  const clip = useSelector((state) => state.addClipReducer);

  return (
    <div>
      <hr />
      {clip.date}
    </div>
  );
}

export default Clip;
