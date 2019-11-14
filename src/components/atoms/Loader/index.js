import React from 'react';

const sizeObj={
  'sm':{
    'width':'20px',
    'height':'20px'
  },
  'md':{
    'width':'60px',
    'height':'60px'
  },
  'lg':{
    'width':'80px',
    'height':'80px'
  }
}

const Loader = ({size}) => (
  <div className="d-flex justify-content-center align-items-center h-100">
    <div className="spinner-border text-info" style={sizeObj[size]} role="status"></div>
  </div>
);

Loader.defaultProps={
  'size':'md'
}

export default Loader;
