import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import OIcon from '../icons/Oicon';
import XIcon from '../icons/Xicon';

export default function BoardCard({ user = 'nouser', active, index }) {
  const { handelSquaresClick } = useContext(GameContext);

  return (
    <div
      className={`card ${active && user === 'x' && 'shadow-blue'}
    ${active && user === 'o' && 'shadow-yellow'} ${
        !active ? 'shadow-gray' : 'active'
      }`}
      onClick={() => handelSquaresClick(index)}
    >
      {user === 'x' && <XIcon color={active && 'dark'} size='lg' />}
      {user === 'o' && <OIcon color={active && 'dark'} size='lg' />}
    </div>
  );
}
