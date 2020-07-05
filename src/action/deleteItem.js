import {
  DELETE_ITEM_START,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
} from './index';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const deleteItem = (id, history) => (dispatch) => {
  axiosWithAuth()
    .delete(`/menu/${id}`)
    .then(res => {
      console.log(res)
      dispatch({ type: DELETE_ITEM_START })
      dispatch({ type: DELETE_ITEM_SUCCESS, payload: id })
      history.push(`/menu`)
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DELETE_ITEM_FAILURE, payload: err })
    })
}

export default deleteItem