import logo from './logo.svg';
// import './App.css';
import TodoFeture from './feature/Todo';
import AlbumFeture from './feature/Album';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <TodoFeture />
        {/* <AlbumFeture />
        <Counter /> */}
    </div>
  );
}

export default App;
