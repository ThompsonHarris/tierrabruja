import React from 'react';
import './app.scss';
//components
import Logo from './components/Icons/Logo.jsx';

class App extends React.Component {
  render() {
    return (
      <div className='Main'>
        <Logo className='Main_logo' />
      </div>
    );
  }
}

export default App;
