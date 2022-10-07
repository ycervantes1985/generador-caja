import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './Components/Form.jsx';
import Card from './Components/Card';


function App() {

  const [colors, setColors] = useState([]); 

  return (
    <div className="App">
      <Form colors={colors} setColors={setColors}/>
      {
        colors?.map((color, index) => (
          <Card key={index} color={color}/>
        ))
      }
    </div>
    
  );
}

export default App;
