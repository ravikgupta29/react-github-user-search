import logo from './logo.svg';
import './App.css';
import React from 'react';
import GithubSearchApp from './components/GithubSearchApp';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
  return (
    <div className="App">
         <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <a href="/" className="navbar-brand">Github Profile Search App</a>
      </nav>
      <GithubSearchApp />
    </div>
  );
}
}

export default App;
