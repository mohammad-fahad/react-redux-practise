import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './Components/CakeContainer';
import HooksCakesContainer from './Components/HooksCakesContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import ChocolatedContainer from './Components/ChocolatedContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakesContainer />
        <IceCreamContainer />
        <ChocolatedContainer />
        <NewCakeContainer />
    </div>
    </Provider>
  );
}

export default App;
