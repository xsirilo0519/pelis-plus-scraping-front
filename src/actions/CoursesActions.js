import actionsTypesPelis from './actionsTypes/ActionsTypePelis'

export const PelisLoading = () => {
  return {
    type: actionsTypesPelis.LOADING_SUCCESS_PELIS
  }
}

export const PelisLoadSucces = (cartelera) => {
  return {
    type: actionsTypesPelis.LOAD_SUCCESS_PELIS,
    payload: cartelera
  }
}

export const PelisLoadError = (error) => {
  return {
    type: actionsTypesPelis.LOAD_FAILURE_PELIS,
    payload: error
  }
}
