import styled from 'styled-components'

const Foot = styled.footer`
  display: flex;
  background-color: #000;
  justify-content: space-between;
  padding: 50px 20px;
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
`

export { Foot, Div, Links, Anchor, Para, Card }
