import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Cache-Control'] = 'no-cache';

const farctal_service = 'https://fractel-service.herokuapp.com/todo_app/';
export default class BucketApis {
  static getAllBuckets = () => {
    return axios.get(`${farctal_service}buckets`);
  };
}
