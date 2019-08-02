import React from 'react';
import Counter from './containers/Counter';
import './App.css';
import ColorfulBeads from './containers/ColorfulBeads';

const App: React.FC = () => (
  <div className="container">
    <Counter />
    <ColorfulBeads />
  </div>
);

export default App;
