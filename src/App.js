import './App.css';
import data from './single-sample';
import Image from './components/Image/image';
import Text from './components/Text/Text';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
     <Image image={data.album.images[1]}/>
     <Text album={data.album} artist={data.album.artists[0]}/>
     <Button/>
    </div>
  );
}

export default App;
