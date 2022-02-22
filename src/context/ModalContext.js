import { createContext, useState } from 'react';

const ModalContext = createContext();

const ModalState = (props) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('winner'); // winner || start
  //* --------------------------------------------------------------------------------->
  // show modal
  const showModal = () => setShow(true);
  //* --------------------------------------------------------------------------------->
  // hide modal
  const hideModal = () => setShow(false);
  return (
    <ModalContext.Provider
      value={{
        show,
        showModal,
        hideModal,
        modalMode: mode,
        setModalMode: setMode,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalState };
