import "./App.css";
import Counter from './component/Counter';

function App() {
  const name = "jun";
  const naver = {
    name: "네이버",
    url: "http://naver.com",
  };

  return (
    <div className="App">
     <h1>Hello, {name}</h1>
     <Counter />
    </div>
  );
}

export default App;
