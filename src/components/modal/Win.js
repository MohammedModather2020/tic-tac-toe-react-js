import React from 'react'
import XIcon from '../icons/Xicon'

export default function Win() {
  return (
    <div className='score'>
      <p>You win!</p>
      <h3 className='score__title'><XIcon/> Takes the round</h3>
      <div className="score__btns">
        <button className='btn btn-sm'>Quit</button>
        <button className='btn btn-sm btn-yellow'>Next Round</button>
      </div>
    </div>
  )
}
