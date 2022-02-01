import styled from 'styled-components'

const Loading = () => (
  <WrapperStyles>
    <LoadingStyles></LoadingStyles>
  </WrapperStyles>
)

export default Loading

// STYLES
const WrapperStyles = styled.div`
  padding: 6rem;
`

const LoadingStyles = styled.div`
  border: 10px solid #e2e2e2;
  border-top: 10px solid #ff867a;
  border-radius: 50%;
  margin: auto;
  width: 100px;
  height: 100px;
  box-shadow: rgba(50, 50, 93, 0.3) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  animation: spin 0.8s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
