import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import ContentModal from '../components/ContentModal';
const Modal = ({open,peli,handleClose}) => {

  return (
      
    peli?
         (<Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
              {peli.nombre}
            </DialogTitle>
            <DialogContent>
            <div>
              <ContentModal pelicula={peli}/>
            </div>
            </DialogContent>
        </Dialog>):null
      
      )
};

export default Modal;
