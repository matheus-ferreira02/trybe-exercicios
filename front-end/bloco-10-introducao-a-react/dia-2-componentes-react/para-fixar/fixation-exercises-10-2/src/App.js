import './App.css';
import Image from './Image';

function App() {
  const src = "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg";
  return (
    <Image source={src} alternativeText="Cute cat staring" />
  );
}

export default App;
