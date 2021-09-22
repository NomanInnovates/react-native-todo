import React from 'react';
import Navigation from './source/navigation/Navigation';
import store from './source/configs/store'
import {Provider} from 'react-redux'
const App = () => {
  return (<Provider store={store} >
      <Navigation />
      </Provider>
  );
};


export default App;
    
















