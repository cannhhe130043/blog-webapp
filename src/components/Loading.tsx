import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background-color: transparent;
  position: absolute;
`

const Box = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 30vh;
  :before,
  :after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @keyframes rotating {
    from {
      transform: rotate(720deg);
    }
    to {
      transform: none;
    }
  }
`

const Cat = styled.div`
  position: relative;
  width: 100%;
  max-width: 20em;
  overflow: hidden;
  background-color: transparent;
  :before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  :hover {
    animation-play-state: paused;
  }
  :active {
    animation-play-state: running;
  }
`

const CatHead = styled.div<{
  style: {
    url: string
  }
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: rotating 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;
  :before {
    content: '';
    position: absolute;
    width: 50%;
    height: 50%;
    background-size: 200%;
    background-image: url(${(props) => props.style.url});
    background-repeat: no-repeat;
    top: 0;
    right: 0;
    background-position: 100% 0%;
    transform-origin: 0% 100%;
    transform: rotate(90deg);
  }
`

const CatTail = styled.div<{
  style: {
    url: string
  }
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: rotating 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;
  animation-delay: 0.2s;
  :before {
    content: '';
    position: absolute;
    width: 50%;
    height: 50%;
    background-size: 200%;
    background-image: url(${(props) => props.style.url});
    background-repeat: no-repeat;
    left: 0;
    bottom: 0;
    background-position: 0% 100%;
    transform-origin: 100% 0%;
    transform: rotate(-30deg);
  }
`

const CatBody = styled.div<{
  style: {
    url: string
  }
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: rotating 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;
  content: '';
  position: absolute;
  width: 50%;
  height: 50%;
  background-size: 200%;
  background-repeat: no-repeat;
  animation-delay: 0.1s;
  :nth-of-type(2) {
    animation-delay: 0.2s;
  }
  :before {
    right: 0;
    bottom: 0;
    background-position: 100% 100%;
    transform-origin: 0% 0%;
    background-image: url(${(props) => props.style.url});
  }
`

export const Loading: React.FC<{
  loading: boolean
}> = ({ loading }) => {
  return (
    <Container style={{ visibility: loading ? 'visible' : 'hidden' }}>
      <Box>
        <Cat>
          <CatBody
            style={{ url: `${window.location.origin}/images/loading.png` }}
          />
          <CatBody
            style={{ url: `${window.location.origin}/images/loading.png` }}
          />
          <CatHead
            style={{ url: `${window.location.origin}/images/loading.png` }}
          />
          <CatTail
            style={{ url: `${window.location.origin}/images/loading.png` }}
          />
        </Cat>
      </Box>
    </Container>
  )
}
