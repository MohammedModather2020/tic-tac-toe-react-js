import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import OIcon from '../icons/Oicon';
import XIcon from '../icons/Xicon';

export default function Win() {
  const { winner, handelReset, handelNextRound } = useContext(GameContext);
  return (
    <div className='score'>
      {winner && winner !== 'no' ? (
        <>
          <p>You win!</p>
          <h3
            className={`score__title ${
              winner === 'o' ? 'text-yellow' : 'text-blue'
            }`}
          >
            {winner === 'x' ? <XIcon  size='sm'/> : <OIcon size='sm'/>} Takes the round
          </h3>
        </>
      ) : (
        <h3 className='score__title text-yellow'>No Winner</h3>
      )}
      <div className='score__btns'>
        <button className='btn btn-sm' onClick={handelReset}>
          Quit
        </button>
        <button className='btn btn-sm btn-yellow' onClick={handelNextRound}>
          Next Round
        </button>
      </div>
    </div>
  );
}
