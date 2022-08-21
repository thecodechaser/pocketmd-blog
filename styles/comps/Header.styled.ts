import styled from 'styled-components'

const Head = styled.header`
  display: flex;
  margin: 10px 15px;
  justify-content: space-between;
`

const Button = styled.button`
  border-radius: 15px;
  padding: 10px 10px;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: #fff;
  border: 1px solid #fff;
  font-weight: bold;
  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding: 5px 5px;
  }
`

const Div = styled.div`
  display: flex;
  gap: 25px;
`

const Logo = styled.a`
  font-size: 25px;
  font-weight: bolder;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export { Head, Button, Div, Logo }
