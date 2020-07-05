import {
  UPDATE_ITEM_START,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE,
  ADD_ITEM_EDIT,
} from './index';

import axiosWithAuth from '../utils/axiosWithAuth';

export const itemToEdit = (item, history) => (dispatch) => {
  console.log(item, 'i am being edited')
  dispatch({ type: ADD_ITEM_EDIT, payload: item })
  history.push(`/update-form/${item}`)
}

const updateItem = (item, id, history) => {
  axiosWithAuth()
    .put(`/menu/${id}`, item)
    .then(res => {
      dispatch({ type: UPDATE_ITEM_START })
      console.log(res.data)
      dispatch({ type: UPDATE_ITEM_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({type: UPDATE_ITEM_FAILURE, payload: err})
    })
}

export default updateItem