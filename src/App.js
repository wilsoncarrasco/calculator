import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import ButtonClear from './components/ButtonClear';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value);
  };

  const clearDisplay = () => {
    setInput('');
  };

  const calculateResult = () => {
    if (input)
      setInput(evaluate(input));
    else
      alert('Por favor agregar datos')
  };

  return (
    <div className='App'>
      <div className='App__calculator-container'>
        <div className='calculator-container__file-button'>
          <Display
            value={input} />
        </div>
        <div className='calculator-container__file-button'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='calculator-container__file-button'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='calculator-container__file-button'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='calculator-container__file-button'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='calculator-container__file-button'>
          <ButtonClear
            clear={clearDisplay} />
        </div>
      </div>
      <div className='App__author'>By: Fernando Carrasco</div>
    </div>
  );
}

export default App;
