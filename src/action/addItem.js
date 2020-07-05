import {
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE
} from './index'

import { axiosWithAuth } from '../utils/axiosWithAuth';

export const addItem = (item) => (dispatch) => {
  dispatch({ type: ADD_ITEM_START })
  axiosWithAuth()
    .post(`/menu`, item)
    .then((res) => {
      console.log('it works', res)
      dispatch({type: ADD_ITEM_SUCCESS, payload: item})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ADD_ITEM_FAILURE})
    })
}