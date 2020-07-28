import React from 'react';
import './App.css';
import ComicSearch from './components/ComicSearch'
import ComicContainer from './components/ComicContainer'
import {Provider} from 'react-redux'
import store from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <ComicSearch />
          <ComicContainer />
      </div>
    </Provider>
  );
}

export default App;
