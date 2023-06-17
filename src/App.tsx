import React from 'react';
import './index.scss';
import Block from "./Block";

const App = () => {
  return (
      <div className="App">
        <Block value={'0'} currency="RUB" onChangeCurrency={(cur: any) => console.log(cur)} />
        <Block value={'0'} currency="USD"/>
      </div>
  )
}

export default App;