import { createContext, useState } from 'react';

const ModalContext = createContext();

const ModalState = (props) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('winner'); // winner || start
  // change toggle modal state
  const showModal = () => setShow(true);
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
