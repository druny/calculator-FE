import React from 'react';
import './App.css';

import { Dashboard } from './scenes/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Dashboard />
        </p>
      </header>
    </div>
  );
}

export default App;
