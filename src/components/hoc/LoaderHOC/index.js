import React from 'react';
import {Loader, Error} from '../../atoms/';

const LoaderHOC = (propName) =>(Component) => {
  return class LoaderHOC extends React.PureComponent{
    render(){
      const {error} = this.props;
      return this.props[propName]? <Loader/>:
      (error?<Error msg={error}/>:<Component {...this.props}/>)
    }
  }
}

export default LoaderHOC;
