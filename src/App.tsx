import React from 'react'
import './App.css'
import { AuthProvider } from './contexts/AuthContext'
import { Main } from './Main'
import styled from 'styled-components'

const Container = styled.div<{
  style: {
    url: string
  }
}>`
  text-align: center;
  height: 100vh;
  width: 100vw;
  background-size: 100% 100%;
  background-image: url(${(props) => props.style.url});
`

function App() {
  React.useEffect(() => {
    const scriptTween = document.createElement('script')
    scriptTween.src = './js/tweenMax.min.js'
    scriptTween.async = false
    document.body.appendChild(scriptTween)
    const scriptNotfound = document.createElement('script')
    scriptNotfound.src = './js/scriptNotfound.js'
    scriptNotfound.async = false
    document.body.appendChild(scriptNotfound)
    const scriptLogin = document.createElement('script')
    scriptLogin.src = './js/scriptLogin.js'
    scriptLogin.async = false
    document.body.appendChild(scriptLogin)
    const scriptRegister = document.createElement('script')
    scriptRegister.src = './js/scriptRegister.js'
    scriptRegister.async = false
    document.body.appendChild(scriptRegister)
    const scriptMorph = document.createElement('script')
    scriptMorph.src = './js/morphSVGPlugin.min.js'
    scriptMorph.async = false
    document.body.appendChild(scriptMorph)
    const scriptCustomEase = document.createElement('script')
    scriptCustomEase.src = './js/customEase.min.js'
    scriptCustomEase.async = false
    document.body.appendChild(scriptCustomEase)
  }, [])
  return (
    <Container style={{ url: `${window.location.origin}/images/bg.jpg` }}>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </Container>
  )
}

export default App
