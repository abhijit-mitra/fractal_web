import React, { PureComponent } from 'react';
import TodoApis from '../../../apis/todo';
import {Button, Checkbox, TextArea, Loader} from '../../atoms';
import {Search} from '../../molecules';


const searchConfig = {
  'setValueBy':'id',
  'displayTextBy':'name'
}

class ToDo extends PureComponent {
  constructor(props) {
    super(props);
    const {id, name, done, bucketId, bucketName, isNew} = props.data;
    this.state = {
      id: id || null,
      name: name||'',
      done: done || false,
      bucketId: bucketId || null,
      bucketName: bucketName || '',
      isSubmitting: false,
      saving: false,
      deleting:false,
      isNew: isNew || false,
      removeComponent:false,
    };
  }

  handleChange = (e)=>{
    const {value} = e.target;
    this.setState({
      name:value
    })
  }

  onSearchComplete = (bucketId, bucketName)=>{
    this.setState({
      bucketId,
      bucketName
    })
  }

  onSaveClick = async (e)=>{
    const {isNew} = this.state;
    try{
      this.setState({isSubmitting: true, saving:true});
      if (isNew){
        const {data} = await TodoApis.createTodo(this.state);
        this.setState({
          id:data.id,
          bucketId:data.bucketId,
          isNew:false,
          isSubmitting: false,
          saving:false
        })
      }
      else{
        await TodoApis.updateTodo(this.state);
        this.setState({isSubmitting: false, saving:false});
      }
    }catch(err){
      this.setState({isSubmitting: false, saving:false});
    }
  }

  handleCheckbox = (e)=>{
    this.setState({
      done: !this.state.done
    });
  }

  handleDelete = async (e)=>{
    const {id} = this.state;
    try{
      this.setState({isSubmitting: true, deleting:true});
      await TodoApis.deleteTodo(id);
      this.setState({removeComponent:true});
    }catch(err){
      this.setState({isSubmitting: false, deleting:false});
    }
  }

  onSearch = (value)=>{
    this.setState({bucketName:value, bucketId:null});
  }

  render() {
    const {name, done, isSubmitting, removeComponent,
      isNew, saving, deleting} = this.state;
    if (removeComponent){
      return <React.Fragment></React.Fragment>
    }
    const {searchData, data}=this.props;
    return (
        <div className="to-do row mb-5">
          <div className="col-md-6">
            <TextArea
              prepend={'ToDo Name'}
              append={<Checkbox onChange={this.handleCheckbox} checked={done}/>}
              value={name}
              disabled={isSubmitting}
              onChange={this.handleChange}
              />
          </div>
          <div className="col-md-4">
            <Search
              prepend={'Bucket Name'}
              searchData = {searchData}
              config={searchConfig}
              value={{id:data.bucketId, name:data.bucketName}}
              disabled={isSubmitting}
              onSearch={this.onSearch}
              onSearchComplete={this.onSearchComplete}
            />
          </div>
          <div className="col-md-2">
            <center>
              <div className="row">
                <div className="col-md-6 mb-2">
                  <Button
                    label={saving?<Loader size='sm'/>:'Save'}
                    onClick={this.onSaveClick}
                    disabled={isSubmitting}
                    />
                </div>
                <div className="col-md-6">
                  <Button
                    label={deleting?<Loader size='sm'/>:'Delete'}
                    type='danger'
                    onClick={this.handleDelete}
                    disabled={isNew || isSubmitting}
                    />
                </div>
              </div>
            </center>
          </div>
        </div>
    );
  }

}

export default ToDo;
