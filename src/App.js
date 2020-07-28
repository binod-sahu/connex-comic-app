import React from 'react';
import './App.css';
import ComicSearch from './components/ComicSearch'
import ComicContainer from './components/ComicContainer'
import {Provider} from 'react-redux'
import store from './redux/store'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ErrorBoundary><ComicSearch /></ErrorBoundary>
        <ErrorBoundary> <ComicContainer /></ErrorBoundary>
      </div>
    </Provider>
  );
}

export default App;
