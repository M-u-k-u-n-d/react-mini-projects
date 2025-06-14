import './App.css'
import Head from './components/header/Head';
import Body from './components/body/Body';
import store from './utils/store';
import {Provider} from 'react-redux';
import WatchPage from './components/body/WatchPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/body/MainContainer';
import SearchResultsPage from './components/body/SearchResultsPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element: (
    <div>
      <Head/>
      <Body/>
    </div>
  ),
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    },
    {
      path: "search-results",
      element: <SearchResultsPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className=''>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
