import { combineReducers } from 'redux'

import { loginReducer } from './loginReducer';
import { registerReducer } from './signUpReducer'
import { getItemsReducer } from './getItemsReducer'
import { addItemReducer } from './addItemReducer'
import { deleteItemReducer } from './deleteItemReducer'
import { updateItemReducer } from './updateItemReducer'

export default combineReducers({
  loginReducer,
  registerReducer,
  getItemsReducer,
  addItemReducer,
  deleteItemReducer,
  updateItemReducer,
})