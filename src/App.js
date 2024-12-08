import React from 'react';
import Stories from './components/Stories';
import Search from './components/Search';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {

  return(
    <>
      <div className='heading'>Tech and news on the go</div>
      <Search />
      <Pagination />
      <Stories />
    </>
  )
}

export default App;