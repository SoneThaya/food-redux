import {
  UPDATE_ITEM_START,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE,
  ADD_ITEM_EDIT,
} from '../action/index';

const initialState = {
  item: {
    title: 'title',
    description: 'description',
    category: 'category',
    price: 'price',
    itemImage: 'itemImage',
  },
  itemToEdit: 0,
  updatingItem: false,
  error: '',
}

export const updateItemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_ITEM_START:
      return {
        ...state,
        updatingItem: true,
        error:  null,
      }
    case ADD_ITEM_EDIT:
      return {
        ...state,
        itemToEdit: payload,
      }
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        updatingItem: false,
        item: payload,
      }
    case UPDATE_ITEM_FAILURE:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}