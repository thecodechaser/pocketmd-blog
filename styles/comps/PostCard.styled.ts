import styled from 'styled-components'

const Info = styled.div``

const Main = styled.div`
padding: 40px 130px;
display: flex;
gap: 50px;
`

const H3 = styled.h3`
margin-top: -1px;
font-size: 30px;
font-weight: 500;
color: #1F1E1E;
`

const P = styled.p`
margin-top: -5px;
font-weight: 500;
color: #1F1E1E;
`


const Button = styled.a`
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  border-bottom: 2px solid #000;
  padding-bottom: 2px;
`
export { Info, Button, Main, H3, P }
