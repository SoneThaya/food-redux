import {
  FETCH_ITEMS_START,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from './index'

// import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'

const getItem = () => (dispatch) => {
  dispatch({ type: FETCH_ITEMS_START })
  
  return axios
    .get(`https://grub-grub-backend.herokuapp.com/api/menu`)
    .then(res => {
      console.log('getting data', res.data)
      dispatch({ type: FETCH_ITEMS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_ITEMS_FAILURE, payload: err })
    })
}

export default getItem