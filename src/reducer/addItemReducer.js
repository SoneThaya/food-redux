import {
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
} from '../action/index';

const initialState = {
  items: [],
  error: '',
  addItem: false,
}

export const addItemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_START:
      return {
        ...state,
        addItem: true,
      }
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        items: payload,
      }
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        addItem: false,
        error: payload,
      }
    default:
      return state
  }
}