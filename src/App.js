import Board from './components/board/Board';
import Start from './components/start/Start';

function App() {
  return (
    <div className='app-wrapper'>
      <div className='container'>
        <Start />
        <Board />
      </div>
    </div>
  );
}

export default App;
