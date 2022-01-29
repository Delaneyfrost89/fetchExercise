import './App.css'
import Form from './components/Form'
import styled from 'styled-components'

function App() {
  return (
    <MainStyles className="App">
      <Form />
    </MainStyles>
  )
}

export default App

const MainStyles = styled.div`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background-image: linear-gradient(
    to right,
    #ff8177 0%,
    #ff867a 0%,
    #ff8c7f 21%,
    #f99185 52%,
    #cf556c 78%,
    #b12a5b 100%
  );
  padding: 2rem;
`
