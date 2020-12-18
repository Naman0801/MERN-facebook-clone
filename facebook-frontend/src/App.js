import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import Login from './Components/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue()
  
  return (
    <div className="app">
      {
        user ? (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              <Feed />
            </div>
          </>
        ) : (
            <Login />
          )
      }

    </div>
  );
}

export default App;
