import React from 'react'
import './pagination.css';
import { useGlobalContext } from '../context';

const Pagination = () => {

  const {nbPages, page, prevPage, nextPage} = useGlobalContext();

  return (
    <>
      <div className="main">
        <span className='button'>
          <button onClick={prevPage}>Prev</button>
        </span>
        <span id='page-count'>
          <p id='page-count-text'>{page+1} of {nbPages}</p>
        </span>
         <span className='button'>
          <button onClick={nextPage}>Next</button>
         </span>
      </div>
    </>
)
}

export default Pagination;
