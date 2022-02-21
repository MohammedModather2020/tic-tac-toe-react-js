import Board from './components/board/Board';
import Modal from './components/modal/Modal';
import Start from './components/start/Start';

function App() {
  return (
    <div className='app-wrapper'>
      <div className='container'>
        {/* <Start /> */}
        <Board />
      </div>
      <Modal />
    </div>
  );
}

export default App;
