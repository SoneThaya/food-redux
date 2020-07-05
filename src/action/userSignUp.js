import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './index'

import axios from 'axios'

const register = (user) => (dispatch) => {
  dispatch({ type: REGISTER_START })
  
  return axios 
    .post('https://grub-grub-backend.herokuapp.com/auth/register', user)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res })
    })
    .catch(err => {
      console.log(err)
      dispatch({type: REGISTER_FAILURE, payload: err})
    })
}

export default register