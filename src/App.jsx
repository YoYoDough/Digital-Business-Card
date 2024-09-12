import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Photo from '/components/Photo.jsx'
import Card from '/components/Card.jsx'
import Links from '/components/Links.jsx'

function App() {

  return (
    <>
      <Photo/>
      <Card/>
      <Links/>
    </>
  )
}

export default App
