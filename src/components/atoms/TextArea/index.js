import React from 'react';

const TextArea = ({prepend, append,...rest}) => (
  <div className="input-group mb-3">
  {
    prepend &&
    <div className="input-group-prepend">
      <div className="input-group-text">
        {prepend}
      </div>
    </div>
  }
    <textarea className="form-control" {...rest}></textarea>
    {
      append &&
      <div className="input-group-append">
        <div className="input-group-text">
          {append}
        </div>
      </div>
    }
  </div>
);

TextArea.defaultProps={
  prepend:null,
  append:null,
}

export default TextArea;
