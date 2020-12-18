import './App.css';
import Actions from './components/Actions';
import Body from './components/Body';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Body/>
      <Actions/>
    </div>
  );
}

export default App;
