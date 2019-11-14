import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import {Button} from '../../atoms';
import {ToDoList} from '../../templates';
import {addTodo} from '../../../actions';

class ToDoPage extends PureComponent {
  handleClick = ()=>{
    this.props.addTodo();
  }
  render() {
    const {isFetching} = this.props;
    return (
      <div className='todo full-height-v p-30'>
        <div className="row">
          <div className="col-md-12 mb-3">
            <Button label='+ ToDo' onClick={this.handleClick} disabled={isFetching}/>
          </div>
        </div>
        <ToDoList/>
      </div>
    );
  }

}

const mapStateToProps=({todoPage:{todos, buckets}})=>({
  isFetching:todos.isFetching || buckets.isFetching
})
export default connect(mapStateToProps,{addTodo})(ToDoPage);
