import React from 'react';
import './app.css';
//components
import Logo from './components/Icons/Logo.jsx';

class App extends React.Component {
  render() {
    return (
      <div className=' flex justify-center h-screen cusLG-blue'>
        <Logo className='container mx-auto fill-current cus-blue' />
      </div>
    );
  }
}

export default App;
