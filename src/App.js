import Hello from './Component/hello';
import './App.css';

function App() {
  const name = 'Hi. hello world';
  const style = {
    backgroundColor: 'black',
    color: 'red',
    fontSize: '10px',
    padding: '1rem',
  }
  return (
    <div style={style}>
      {/* 주석주석주석 */}
      <Hello />
      <div>{name}</div>
      <div className='box'></div>
    </div>
  );
}

export default App;
