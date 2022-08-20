import { Foot, Div, Links, Anchor, Para } from '../styles/comps/Footer.styled'
import Image from 'next/image'

const Footer = () => {
  return (
    <Foot>
      <Image src="/logo.svg" alt="hamburger" width="100" height="100" />

      <Div>
        <Links>
          <Anchor>Hello</Anchor>
          <Anchor>Hello</Anchor>
          <Anchor>Hello</Anchor>
        </Links>

        <Para> adaadadadgbghghb</Para>
      </Div>
    </Foot>
  )
}

export default Footer
