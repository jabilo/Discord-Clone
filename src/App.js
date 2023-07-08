import React, { useEffect } from 'react';
import Chat  from './Chat'
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { selectUser} from './features/userSlice';
import {auth} from './firebase'
import './App.css';
import {login,logout} from './features/userSlice'

import Sidebar from './Sidebar'
import './App.css';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // if user is loggeed in
        console.log('user is : ', authUser);
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName,
        }))
      }else{
        // if user if logged out
        dispatch(logout());
      }
    });
  },[dispatch])
  return (
    <div className="app">
    {user ? (
      <>
        <Sidebar/>
        <Chat/>
      </>
    ) : (
      <Login/>
    
    )} 
     
    </div>
  );
}

export default App;
