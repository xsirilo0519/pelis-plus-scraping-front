import axios from 'axios'
import { PelisLoading, PelisLoadSucces, PelisLoadError } from '../actions/CoursesActions'

export const getCourse = (id) => (dispatch) => {
  dispatch(PelisLoading())

  const options = {
    method: 'GET',
    url: `http://localhost:8080/api/cartelera/${id}`
  }

  axios.request(options).then(function (response) {
    console.log("info",response.data);
    dispatch(PelisLoadSucces(response.data[0]))
  }).catch(function (error) {
    dispatch(PelisLoadError(error))
  })
}
