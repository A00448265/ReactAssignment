import logo from './logo.svg';
import './App.css';
import About from "./components/about"
import City from "./components/city"
import React, { useState } from 'react';

function App() {

 const [menuVal, setmenuVal] = useState('a');
 let value;
 if(menuVal =='a') 
  value = <About onclick=""/>
  else
  value=<City /> 

// const value = 'b' ? <About/> : <City/>;
 

  return (
    <div className="App">
      <nav className="menu">
      <a className="menu-item" href="#" onClick={() => setmenuVal('a')}>About</a>
      <a className="menu-item" href="#" onClick={() => setmenuVal('c')}>City</a>
      </nav>
      {/* <header className="App-header"> */}
        
      {/* <div className="menu">
          <a className="menu-item" href="#" onClick={() => setmenuVal('a')}>About</a>
          <a className="menu-item" href="#" onClick={() => setmenuVal('c')}>City</a>
        </div> */}
        
        {value}
        
      {/* </header> */}
    </div>
  );
}

export default App;
