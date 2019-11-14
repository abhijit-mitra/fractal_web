import TodoApis from '../../apis/todo';
import BucketApis from '../../apis/bucket';
import {GET_ALL_TODOS,
  GET_ALL_TODOS_SUCCESS,
  GET_ALL_TODOS_FAILED,
  ADD_TODO,
  GET_ALL_BUCKETS,
  GET_ALL_BUCKETS_SUCCESS,
  GET_ALL_BUCKETS_FAILED,
} from './actionTypes';

export const getAllTodos=()=> async(dispatch)=>{
  try{
    dispatch({
      type:GET_ALL_TODOS
    })
    const {data} = await TodoApis.getAllTodos();
    const normalized_data = data.reduce((acc, elm)=>{
      acc[elm.id]=elm;
      return acc;
    },{})
    dispatch({
      type:GET_ALL_TODOS_SUCCESS,
      payload:{
        data:normalized_data
      }
    })
  }catch(err){
    dispatch({
      type:GET_ALL_TODOS_FAILED,
      payload:{
        error:'Something went wrong'
      }
    })
  }
}

export const getAllBuckets=()=> async(dispatch)=>{
  try{
    dispatch({
      type:GET_ALL_BUCKETS
    })
    const {data} = await BucketApis.getAllBuckets();
    dispatch({
      type:GET_ALL_BUCKETS_SUCCESS,
      payload:{
        data:data
      }
    })
  }catch(err){
    dispatch({
      type:GET_ALL_BUCKETS_FAILED,
      payload:{
        error:'Something went wrong'
      }
    })
  }
}

export const addTodo=()=>async(dispatch)=>{
  dispatch({
    type:ADD_TODO
  })
}
