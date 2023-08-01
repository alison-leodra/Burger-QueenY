import React from 'react';
import './App.css';
import Login from './components/form/Login';
import PageWaiters from './components/pages/waiter/PageWaiters';
import AddOrder from './components/pages/waiter/AddOrder';

function App() {
  return (
    <div className="App">
    {/* <Login /> */}
    <AddOrder />
    </div>
  );
}

export default App;
