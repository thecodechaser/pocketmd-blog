import styled from 'styled-components'

const Foot = styled.footer`
  display: flex;
  background-color: #000;
  justify-content: space-between;
  padding: 100px 20px;
`

const Div = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`

const Links = styled.div`
  display: flex;
  gap: 20px;
`

const Anchor = styled.a`
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  &:hover {
    border-bottom: 1px solid #fff;
  }
`

const Para = styled.p`
  color: #fff;
  font-size: 13px;
  font-weight: 600;
`

const Card = styled.div`
  display: flex;
  gap: 10px;
  color: #757575;
  margin-right: 20px;
  background-color: #1c1c1c;
  padding: 1px 10px;
  border-radius: 20px;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  color: #fff;
  &:hover {
    background-color: #fff;
  }
`

export { Foot, Div, Links, Anchor, Para, Card }