import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import { ModalContext } from '../../context/ModalContext';

export default function Restart() {
  const { handelReset } = useContext(GameContext);
  const { toggleModal } = useContext(ModalContext);
  return (
    <div className='restart'>
      <h3 className='restart__title'>Restart Game ?</h3>
      <div className='restart__btns'>
        <button className='btn btn-sm' onClick={toggleModal}>
          no , cancel
        </button>
        <button className='btn btn-sm btn-yellow' onClick={handelReset}>
          yes , restart
        </button>
      </div>
    </div>
  );
}
