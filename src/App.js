import React, { useState, useCallback, useMemo } from 'react'
import './App.css';
import Count from './Count';

function App() {
  const [text, setText] = useState('');

  const onOdd = useCallback(() => setText(''), [setText]);

  const data = useMemo(() => ({ isEven: false }), []);

  return (
    <div className='App'>
      <input value={text} onChange={e => setText(e.target.value)} />
      <Count onOdd={onOdd} data={data} />
    </div>
  );
}

export default App;
