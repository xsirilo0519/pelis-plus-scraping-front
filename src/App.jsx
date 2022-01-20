import { useEffect,useState } from 'react'
import { getCourse } from './utils/get'
import { useDispatch,useSelector } from 'react-redux'
import Modal from './utils/Modal'
import Cards from './components/Cards'
import { list } from 'postcss'
function App () {
      const {
        isLoading,
        cartelera,
        error
    } = useSelector(state => state.cartelera)

  const [open, setOpen] = useState(false);
  const [peli, setPeli] = useState();

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCourse('456'))
  }, [])

  useEffect(() => {
    const socket = new WebSocket('ws://' + 'localhost:8080' + '/retrieve/' + '456')
    socket.onmessage = function (m) {
      const data = JSON.parse(m.data)
      dispatch(getCourse('789'))
      console.log('Got message: ' + data.type)
    }
  }, [])

  const handleOpen = (pelicula) => {
    setPeli(pelicula)
    setOpen(true);
  };

   const handleClose = () => {
        setOpen(false);
      };

  return (
    <div className='App'>

              {cartelera?
              (<div>
                 <h1>Cartelera del {cartelera.date}</h1>
                <div style={{display:'flex',flexDirection:'row',textAlign:'center',flexWrap:'wrap',justifyContent:'center'}}>
                {
                Object.keys(cartelera.pelicula).map((identificador) => {
                        return(
                          <Cards key={identificador} pelicula={cartelera.pelicula[identificador]} handleOpen={handleOpen} titulo={identificador} ></Cards>
                )})}</div></div>):<p>No se ha cargado la cartelera refresque la pagina</p>}
    
        {isLoading && <h1> Cargando cartelera </h1>}
            {error && <h1> Error {error} </h1>}

           {<Modal
          peli={peli}
          open={open}
          handleClose={handleClose}
        ></Modal>}

    </div>
  )
}

export default App
