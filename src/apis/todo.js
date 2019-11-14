import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Cache-Control'] = 'no-cache';

const farctal_service = 'https://fractel-service.herokuapp.com/todo_app/';
export default class TodoApis {
  static getAllTodos = () => {
    return axios.get(`${farctal_service}todos`);
  };
  static updateTodo = (reqBody) =>{
    return axios.put(`${farctal_service}todos/${reqBody.id}`, reqBody);
  };
  static createTodo = (reqBody) =>{
    delete reqBody['id'];
    return axios.post(`${farctal_service}todos`, reqBody);
  };
  static deleteTodo = (id) =>{
    return axios.delete(`${farctal_service}todos/${id}`);
  }
}
