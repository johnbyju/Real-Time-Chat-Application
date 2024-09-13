import { useState } from 'react'

import './App.css'

import AuthPage from './AuthPage';

import ChatsPage from './ChatsPage';
function App() {
   
     const [User , setUser]=useState(undefined);

     if(!User){
      return <AuthPage onAuth={(User)=>setUser(User)}/>

     }
     else{
      return <ChatsPage user ={User}/> ;
     }
  
}

export default App ;
