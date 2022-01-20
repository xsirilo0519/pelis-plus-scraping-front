import { combineReducers } from 'redux'
import CarteleraReducer from '../reducers/CarteleraReducer'

const rootReducer = () => {
  return combineReducers(
    {
      cartelera: CarteleraReducer
    }
  )
}

export default rootReducer
