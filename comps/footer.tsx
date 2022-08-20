import { Foot, Div, Links, Anchor, Para } from '../styles/comps/Footer.styled'
import Image from 'next/image'

const Footer = () => {
  return (
    <Foot>
      <Image src="/logo.svg" alt="hamburger" width="150" height="100" />

      <Div>
        <Links>
          <Anchor>Term & Conditions</Anchor>
          <Anchor>Privacy Policy</Anchor>
          <Anchor>SitemapCCPA: Do Not Sell My Personal Information</Anchor>
        </Links>

        <Para>
          © 2022 Created by Ranjeet Singh for PocketMD. All rights reserved
        </Para>
      </Div>
    </Foot>
  )
}

export default Footer
