import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const names = ['matheus', 'higu', 'mila', 'katia', 'digo'];

function App() {
  return (
    names.map(Task)
  );
}

export default App;
