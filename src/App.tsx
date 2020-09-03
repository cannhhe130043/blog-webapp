import React from 'react'
import './App.css'
import { AuthProvider } from './contexts/AuthContext'
import { Main } from './components/Main'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Main />
      </AuthProvider>
    </div>
  )
}

export default App
