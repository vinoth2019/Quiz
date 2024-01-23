
import './App.css';  
import Headers from './components/Headers';
import Quiz from './components/Quiz';
function App() {
  return (
    <div className="App"> 
      <Headers /> 
      <main>
        <Quiz />
      </main>
    </div>
  );
}

export default App;
