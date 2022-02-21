import React from 'react';
import OIcon from '../icons/Oicon';
import XIcon from '../icons/Xicon';
import BoardCard from './BoardCard';

export default function Board() {
  const squars = ['', 'o', 'x', '', 'o', 'x', '', '', ''];
  return (
    <div className='board'>
      <div className='board__header'>
        <div>
          <XIcon />
          <OIcon />
        </div>
        <div className='board_turn'>
          <XIcon color='light' size='sm' /> turn
        </div>
        <div>
          <button className='btn btn-sm board__restart'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='redo'
              role='img'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z'
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className='board__body'>
        {squars.map((squar, index) => (
          <BoardCard
            key={index}
            index={index}
            user={squar}
            active={index === 5}
          />
        ))}
      </div>
      <div className='board__footer'>
        <div className="card bg-blue">
          <p className='text-light'>x (you)</p>
          <strong className='text-2xl'>10</strong>
        </div>
        <div className="card bg-light">
          <p className='text-light'>ties</p>
          <strong className='text-2xl'>20</strong>
        </div>
        <div className="card bg-yellow">
          <p className='text-light'>o (cpu)</p>
          <strong className='text-2xl'>10</strong>
        </div>
      </div>
    </div>
  );
}
