import React, { useState } from 'react'
import Modal from 'react-modal';
import {useDispatch} from 'react-redux';
import { edit } from '../redux/action';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



Modal.setAppElement('#root');

const Edit = ({elem}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

  const dispatch = useDispatch();
    const [old, setOld]=useState(elem.action)
    return (
        <div>
            <button className="button-23" onClick={openModal}>Edit task</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        
      >
          <form onSubmit={(e)=>e.preventDefault()}>
              <label>Edit:</label>
              <input className="inpt" type="text" value={old} onChange={(e)=>setOld(e.target.value)} />
              <button className="button-23" onClick={()=>dispatch(edit(elem.id,old))}>Confirm</button>
              <button className="button-23" onClick={closeModal}>Cancel</button>
          </form>
      </Modal>
        </div>
    )
}

export default Edit
