import { createContext, useState } from 'react';

const GameContext = createContext();

const GameState = (props) => {
  const [screen, setScreen] = useState('start'); // start || game
  const [activeUser, setActiveUser] = useState('x'); // x || o
  const [playMode, setPlayMode] = useState('user'); // user || cpu

  const changePlayMode = (mode) => {
    setPlayMode(mode);
    setScreen('game');
  };
  return (
    <GameContext.Provider
      value={{ screen, activeUser, setActiveUser, changePlayMode }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
export { GameContext, GameState };
