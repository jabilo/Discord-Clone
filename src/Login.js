import React from 'react'
import Button from '@mui/material/Button';
import './Login.css'
import {signInWithPopup } from "firebase/auth";
import {auth,provider} from  './firebase'
function Login() {
    const signIn = () => {
        // do clever google login shit
        signInWithPopup(auth,provider)
        .then((result) => {
          console.log(result);
          console.log("user : ",result.user.displayName)
          console.log("user email : ",result.user.email)
          if(result.user){
            console.log('signed in :)')
          }else{
            console.log('boom ...')
          
          }
        })
    }
  return (
    <div className='login'>
      <div className='login___logo'>
        <img src='https://www.svgrepo.com/show/353655/discord-icon.svg' alt='img'/>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
