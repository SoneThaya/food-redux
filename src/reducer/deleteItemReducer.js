import {
  DELETE_ITEM_START,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
} from '../action/index'

const initialState = {
  items: [
    {
      id: null,
      title: '',
      description: '',
      category: '',
      price: '',
      itemImage: '',
      user_id: localStorage.getItem('id'),
    },
  ],
  deletingItems: false,
  error: '',
}

export const deleteItemsReducer = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case DELETE_ITEM_START:
      return {
        ...state,
        deletingItems: true,
        error: null,
      }
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        deletingItems: false,
        items: state.items.filter(
          (item) => item.id !== payload
        ),
      }
    case DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}