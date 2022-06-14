import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
function SearchInput() {
  const dispatch = useDispatch();

  const getData = async () => {
    await axios
      .get(
        'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=9NtLMxmAG09fgLDdyjyl5CG3y4uGk1EE'
      )
      .then((res) =>
        dispatch({ type: 'addNews', payload: res.data.response.docs })
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type='submit'>submit</button>
    </form>
  );
}

export default SearchInput;
