import { createContext, useState } from 'react';

const ModalContext = createContext();

const ModalState = (props) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('winner'); // winner || start
  // change toggle modal state
  const toggleModal = () => setShow(!show);
  return (
    <ModalContext.Provider
      value={{ show, toggleModal, modalMode: mode, setModalMode: setMode }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalState };
