import {
  FETCH_ITEMS_START,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from '../action/index'

const initialState = {
  items: [
    {
      title: 'title',
      description: 'description',
      category: 'category',
      price: 'price',
      itemImage: 'itemImage',
    },
  ],
  fetchingItemsList: false,
  error: '',
}

export const getItemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ITEMS_START:
      return {
        ...state,
        fetchingItemsList: true,
        error: null,
      }
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        fetchingItemsList: true,
        items: payload,
      }
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}