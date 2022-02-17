import React from 'react';

export default function Start() {
  return (
    <div className='start'>
      <div className='start__header'>
        <h2 className='start__header-title'>x o</h2>
      </div>
      <div className='card shadow-gray'>
        <h3 className='text-lg'>Pick Player 1's mark</h3>
        <div className='start__players'>
          <span className='start__players--active'>x</span>
          <span>o</span>
        </div>
        <p className='text-light'>Remember: x goes first</p>
      </div>
      <div className='start__btn-group'>
        <button className='btn btn-yellow'>New game (vs CPU)</button>
        <button className='btn btn-blue'>New game (vs Player)</button>
      </div>
    </div>
  );
}
