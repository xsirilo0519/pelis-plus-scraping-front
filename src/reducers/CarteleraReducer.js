import actionsTypesPelis from '../actions/actionsTypes/ActionsTypePelis'

const initialState = {
  isLoading: false,
  cartelera: null,
  error: null
}

const CarteleraReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesPelis.LOADING_SUCCESS_PELIS:
      return {
        ...state,
        isLoading: true
      }
    case actionsTypesPelis.LOAD_SUCCESS_PELIS:
      return {
        ...state,
        isLoading: false,
        cartelera: payload
      }
    case actionsTypesPelis.LOAD_FAILURE_PELIS:
      return {
        ...state,
        isLoading: false,
        error: payload
      }

    default: return state
  }
}

export default CarteleraReducer
