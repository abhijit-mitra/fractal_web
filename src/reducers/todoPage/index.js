import { handleActions } from 'redux-actions';
import {GET_ALL_TODOS,
  GET_ALL_TODOS_SUCCESS,
  GET_ALL_TODOS_FAILED,
  GET_ALL_BUCKETS,
  GET_ALL_BUCKETS_SUCCESS,
  GET_ALL_BUCKETS_FAILED,
  ADD_TODO} from '../../actions/ToDo/actionTypes';
const initialState = {
    todos:{
      isFetching:false,
      data:{},
      error:null,
    },
    buckets:{
      isFetching:false,
      data:{},
      error:null,
    }
}

const getAllToDos = {
  [GET_ALL_TODOS]: (state = initialState,{ payload }) => (
    {...state,todos:{...state.todos,isFetching:true}}),
  [GET_ALL_TODOS_SUCCESS]: (state = initialState,{ payload }) => (
    {...state,
      todos:{
      ...state.todos,
      isFetching:false,
      data: payload.data,
    }
  }),
  [GET_ALL_TODOS_FAILED]: (state = initialState,{ payload }) => (
    {...state,
      todos:{
        ...state.todos,
        isFetching:false,
        error:payload.error
      }
    }),
};

const getAllBuckets = {
  [GET_ALL_BUCKETS]: (state = initialState,{ payload }) => (
    {...state,buckets:{...state.buckets,isFetching:true}}),
  [GET_ALL_BUCKETS_SUCCESS]: (state = initialState,{ payload }) => (
    {...state,
      buckets:{
      ...state.buckets,
      isFetching:false,
      data: payload.data,
    }
  }),
  [GET_ALL_BUCKETS_FAILED]: (state = initialState,{ payload }) => (
    {...state,
      buckets:{
        ...state.buckets,
        isFetching:false,
        error:payload.error
      }
    }),
};

const addTodo={
  [ADD_TODO]:(state = initialState)=>(
    {...state,
      todos:{
        ...state.todos,
        data:{
          ...state.todos.data,
          [new Date().getTime()]:{
            id:new Date().getTime(),
            name:'',
            done: false,
            bucketId:null,
            bucketName:'',
            isNew: true,
          }
        }
      }
    }
  )
}

const todoPage = handleActions(
  {
    ...getAllToDos,
    ...addTodo,
    ...getAllBuckets
  },
  initialState,
);

export default todoPage;
