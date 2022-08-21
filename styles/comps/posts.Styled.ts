import styled from 'styled-components'

const P = styled.p`
  margin-top: -5px;
  padding-top: 100px;
  color: #cc835c;
  text-align: center;
  font-weight: 500;
`

const H2 = styled.h2`
  font-size: 50px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`

const HR = styled.div`
  border-bottom: 3px solid #eee2d7;
  margin-bottom: 60px;
`

export { P, H2, HR }
