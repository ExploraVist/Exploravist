import React, { Fragment } from 'react';
import '../styles/GenerationTitle.css';

const GenerationTitle = (props) => {
  return (
    <Fragment>
      <header className='generationtitle'>
        <p className='generationtitle_num'>{props.category}:</p>
        <p className='generationtitle_date'>({props.date})</p>
        <p className='generationtitle_title'>{props.title}</p>
      </header>
    </Fragment>
  );
};

export default GenerationTitle;