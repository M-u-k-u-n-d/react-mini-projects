import './App.css'
import Head from './components/header/Head';
import Body from './components/body/Body';
import store from './utils/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className=''>
      <Head/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
