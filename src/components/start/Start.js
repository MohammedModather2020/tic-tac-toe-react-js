import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import OIcon from '../icons/Oicon';
import XIcon from '../icons/Xicon';

export default function Start() {
  const { activeUser, setActiveUser, changePlayMode } = useContext(GameContext);
  return (
    <div className='start'>
      <div className='start__header'>
        <h2 className='start__header-title'>
          <XIcon />
          <OIcon />
        </h2>
      </div>
      <div className='card shadow-gray'>
        <h3 className='text-lg'>Pick Player 1's mark</h3>
        <div className='start__players'>
          <span
            className={activeUser === 'x' ? 'start__players--active' : ''}
            onClick={() => setActiveUser('x')}
          >
            <XIcon color={activeUser === 'x' ? 'dark' : 'light'} />
          </span>
          <span
            className={activeUser === 'o' ? 'start__players--active' : ''}
            onClick={() => setActiveUser('o')}
          >
            <OIcon color={activeUser === 'o' ? 'dark' : 'light'} />
          </span>
        </div>
        <p className='text-light'>Remember: ( X ) goes first</p>
      </div>
      <div className='start__btn-group'>
        <button
          className='btn btn-yellow'
          onClick={() => changePlayMode('cpu')}
        >
          Start New Game (vs CPU)
        </button>
        <button className='btn btn-blue' onClick={() => changePlayMode('user')}>
          Start New Game (vs Player)
        </button>
      </div>
    </div>
  );
}
