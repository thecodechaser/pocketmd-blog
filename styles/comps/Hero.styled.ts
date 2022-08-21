import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  background-color: #b7c7c9;
  height: 80vh;
  padding: 150px 120px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 100px;
  }
`

const H1 = styled.h1`
  font-size: 80px;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`

const P = styled.p`
  font-size: 25px;
  font-weight: 500;
  margin-top: -50px;
  width: 60%;
  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }
`

export { Div, H1, P }
