import styled from 'styled-components'

const H2 = styled.h2`
  margin-top: 40px;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`

const H4 = styled.h4`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const P = styled.p`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  margin: 50px 0;
`

const A = styled.a`
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  color: blue;
`

export { H2, H4, P, A }
