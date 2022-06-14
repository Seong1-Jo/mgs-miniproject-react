import React from 'react';
import NewsList from '../components/NewsList';
import Clip from './Clip';
import SearchInput from '../components/SearchInput';
function Home() {
  return (
    <div>
      <SearchInput />
      <NewsList />
      <Clip />
    </div>
  );
}

export default Home;
