import React from 'react';
import OIcon from '../icons/Oicon';
import XIcon from '../icons/Xicon';

export default function BoardCard({ user = 'nouser', active, index }) {
  return (
    <div
      className={`card ${active && user === 'x' && 'shadow-blue'}
    ${active && user === 'o' && 'shadow-yellow'} ${
        !active ? 'shadow-gray' : 'active'
      }`}
    >
      {user === 'x' && <XIcon color={active && 'dark'} size='lg' />}
      {user === 'o' && <OIcon color={active && 'dark'} size='lg' />}
    </div>
  );
}
