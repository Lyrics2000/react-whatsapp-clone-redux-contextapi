

import './App.css';
import Sidebar from './components/Sidebar';
import ChatComponent from './components/Chat'

function App() {
  return (
    <div className="App">
      
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />

        {/* chat */}
        <ChatComponent/>

      </div>
    </div>
  );
}

export default App;
