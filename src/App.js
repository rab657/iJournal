import './App.css';
import MainPage from './components/MainPage';
import Datetime from './components/Datetime';
import {ToDoProvider} from './contexts/ToDoContext';

function App() {
  return (
    <div className="App">
      <>
        <h1>Your Personal Task Manager!</h1>
        <Datetime />
      </>
      
          <ToDoProvider>
              <MainPage />
          </ToDoProvider>

    </div>
  );
}

export default App;
