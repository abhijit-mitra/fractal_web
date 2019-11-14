import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {getAllTodos, getAllBuckets} from '../../../actions/';

import WithLoader from './WithLoader';

class ToDoList extends PureComponent {
  componentDidMount(){
    this.props.getAllTodos();
    this.props.getAllBuckets();
  }
  render() {
    return <WithLoader {...this.props}/>
  }

}

const mapStateToProps = ({todoPage:{todos, buckets}}, ownProps)=>({
      todos:todos.data,
      buckets:buckets.data,
      isFetching:todos.isFetching || buckets.isFetching,
      error:todos.error
});

export default connect(mapStateToProps, {getAllTodos, getAllBuckets})(ToDoList);
