import React from 'react';
import './App.css';
import Login from './components/form/Login';
import PageWaiters from './components/pages/waiter/PageWaiters';

const App = () => {
  return (
    <div className="App">
    {/* <Login /> */}
    <PageWaiters />
    </div>
  );
}

export default App;
