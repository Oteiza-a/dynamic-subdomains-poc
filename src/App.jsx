import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const getFullDomain = () => {
  return window.location.host;
}

const getSubDomain = () => {
  const domains = window.location.host.split('.');

  if (domains.length > 2) return "TOO MANY SUB DOMAINS";
  if (domains.length === 2) return domains[0]
  if (domains.length >= 0) return "NO SUB-DOMAIN";
  
}

function App() {
  return (
    <div className="App">
      <img src={reactLogo} alt="react logo" className='logo'/>
      <h1>Dynamic sub-domains POC</h1>
      <p>Full domain: {getFullDomain()}</p>
      <p>Current sub-domain: {getSubDomain()}</p>
    </div>
  )
}

export default App
