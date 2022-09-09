import React from 'react';
import './App.css';
import ComponentTwo from './components/ComponentTwo';
import HelloWorld from './components/HelloWorld';


function App() {
  return (     ///we should always have ONE Only super-parent element 
    <div className="App"> 
      <div> 
        <HelloWorld name="Jonny" surname="Winston"/>
        <ComponentTwo name="Yorick" />
        {header}
      </div>
    </div>
  );
}

var header=(
  <h1>hello world!!!</h1>
)


export default App;
