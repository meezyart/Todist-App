import React from 'react';
import { Header } from './components/Layout/Header';
import { Content } from './components/Layout/Content';

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
