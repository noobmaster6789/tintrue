import logo from './logo.svg';
import './style/App.css';
import {Button} from "./components/atoms/Button";
import './style/index.scss';

function App() {
    const handleClick = () => {
        console.log('click')
    }
  return (
    <div className="App">
      <Button buttonTitle={'Why tintrue'} onClick={() => handleClick} />
    </div>
  );
}

export default App;
