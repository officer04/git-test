import './App.css';

function App() {
  const sum = (obj: number[]): number => {
    let sum = 0
    for (let i = 0; i < obj.length; i++) {
      sum = obj[i]
    }
    return sum
  }



  return (
    <div className="App">
      <header className="App-header">
        <p>
          E <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          салам алейку
        </a>
        <button onClick={() => sum([1,4,5,6,7,8,9])}></button>
      </header>
    </div>
  );
}

export default App;
