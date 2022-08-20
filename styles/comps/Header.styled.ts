import styled from 'styled-components'

const Head = styled.header`
  display: flex;
  margin: 10px 15px;
  justify-content: space-between;
`

const Button = styled.button`
  border-radius: 15px;
  padding: 10px 10px;
  box-shadow: 2px 2px 8px 2px rgba(0,0,0,0.2);
  transition: 0.3s;
  background-color: #fff;
  border: 1px solid #fff;
  font-weight: bold;
`

const Logo = styled.a`
  font-size: 25px;
  font-weight: bolder;
`

export { Head, Button, Logo }
