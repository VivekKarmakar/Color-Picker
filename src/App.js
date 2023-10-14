import './App.css';
import React from 'react';
import ColorPicker from './component/picker';

const App = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

  return (
    <div class="PickelApp">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
