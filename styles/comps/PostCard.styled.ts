import styled from 'styled-components'

const Info = styled.div``

const Main = styled.div`
  padding: 0px 130px;
`

const Secondary = styled.div`
  display: flex;
  gap: 50px;
`

const H3 = styled.h3`
  margin-top: -1px;
  font-size: 30px;
  font-weight: 500;
  color: #1f1e1e;
`

const P = styled.p`
  margin-top: -5px;
  font-weight: 500;
  color: #1f1e1e;
`

const Button = styled.a`
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  border-bottom: 2px solid #000;
  padding-bottom: 2px;
`

const HR = styled.div`
  border-bottom: 3px solid #eee2d7;
  margin-top: 60px;
  margin-bottom: 40px;
`
export { Info, Button, Main, H3, P, HR, Secondary }
