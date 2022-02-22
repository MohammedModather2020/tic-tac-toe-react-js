/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import { calcBestMove, calcWinner } from '../helpers/CalcSquares';
import { ModalContext } from './ModalContext';

const GameContext = createContext();

const GameState = (props) => {
  const { showModal, hideModal, setModalMode } = useContext(ModalContext);
  const [screen, setScreen] = useState('start'); // start || game
  const [activeUser, setActiveUser] = useState('x'); // x || o
  const [playMode, setPlayMode] = useState('user'); // user || cpu
  const [squares, setSquares] = useState(new Array(9).fill(''));
  const [xNext, setXNext] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winnerLine, setWinnerLine] = useState(null);
  const [ties, setTies] = useState({ x: 0, o: 0, no: 0 });
  //* --------------------------------------------------------------------------------->
  useEffect(() => {
    checkNoWinner(); // trigger check round each render state
    const currentUser = xNext ? 'o' : 'x';
    if (playMode === 'cpu' && currentUser !== activeUser && !winner) {
      cpuNext(squares);
    }
  }, [xNext, winner, screen]);
  //* --------------------------------------------------------------------------------->
  // choose user or cpu
  const changePlayMode = (mode) => {
    setPlayMode(mode);
    setScreen('game');
  };
  //* --------------------------------------------------------------------------------->
  // handel click user or cpu play
  const handelSquaresClick = (index) => {
    if (squares[index] || winner) return;
    const currentUser = xNext ? 'o' : 'x';
    if (playMode === 'cpu' && currentUser !== activeUser) {
      return;
    }
    let newSquares = [...squares];
    newSquares[index] = !xNext ? 'x' : 'o';
    setSquares(newSquares);
    setXNext(!xNext);
    // check winner
    checkWinner(newSquares);
  };
  //* --------------------------------------------------------------------------------->
  //check winner
  const checkWinner = (square) => {
    const isWinner = calcWinner(square);
    if (isWinner) {
      setWinner(isWinner.winner);
      setWinnerLine(isWinner.line);
      // set ties
      const oldTies = { ...ties };
      oldTies[isWinner.winner] += 1;
      setTies(oldTies);
      showModal();
      setModalMode('winner');
    }
  };
  //* --------------------------------------------------------------------------------->
  // check is no winner
  const checkNoWinner = () => {
    const moves = squares.filter((square) => square === '');
    if (moves.length === 0 && winnerLine === null) {
      const oldTies = { ...ties };
      oldTies['no'] += 1;
      setTies(oldTies);
      setWinner('no');
      showModal();
      setModalMode('winner');
    }
  };
  //* --------------------------------------------------------------------------------->
  // out or restart of game
  const handelReset = () => {
    setSquares(new Array(9).fill(''));
    setXNext(false);
    setWinner(null);
    setWinnerLine(null);
    setActiveUser('x');
    setTies({ x: 0, o: 0 });
    hideModal();
    setScreen('start');
  };
  //* --------------------------------------------------------------------------------->
  // handel new round game
  const handelNextRound = () => {
    setSquares(new Array(9).fill(''));
    setXNext(winner === 'x');
    setWinner(null);
    setWinnerLine(null);
    hideModal();
  };
  //* --------------------------------------------------------------------------------->
  // handel paly with computer
  const cpuNext = (square) => {
    const bestMove = calcBestMove(square, activeUser === 'x' ? 'o' : 'x');
    let newSquares = [...squares];
    newSquares[bestMove] = !xNext ? 'x' : 'o';
    setSquares(newSquares);
    setXNext(!xNext);
    checkWinner(newSquares);
  };
  return (
    <GameContext.Provider
      value={{
        screen,
        activeUser,
        xNext,
        ties,
        playMode,
        winner,
        winnerLine,
        squares,
        setActiveUser,
        changePlayMode,
        handelSquaresClick,
        handelReset,
        handelNextRound,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
export { GameContext, GameState };
