import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ModalState } from './context/ModalContext';
import { GameState } from './context/GameContext';

ReactDOM.render(
  <React.StrictMode>
    <ModalState>
      <GameState>
        <App />
      </GameState>
    </ModalState>
  </React.StrictMode>,
  document.getElementById('root')
);
