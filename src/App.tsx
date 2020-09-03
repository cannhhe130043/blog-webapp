import React from "react"
import "./App.css"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  )
}

export default App
