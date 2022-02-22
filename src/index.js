import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ModalState } from './context/ModalContext';
import { GameState } from './context/GameContext';
import './index.css';
import './responsive.css';

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
