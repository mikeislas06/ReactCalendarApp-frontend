import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className='loading-spinner-container'>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
