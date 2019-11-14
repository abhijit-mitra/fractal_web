import React from 'react';

const Error = ({msg}) => (
  <div className="alert alert-danger" role="alert">{msg}</div>
);

Error.defaultProps={
  msg:'Sorry Something Went Wrong!'
}

export default Error;
