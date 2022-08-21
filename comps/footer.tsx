import {
  Foot,
  Div,
  Links,
  Anchor,
  Para,
  Card,
} from '../styles/comps/Footer.styled'
import Image from 'next/image'

const Footer = () => {
  return (
    <Foot>
      <div className="firstSec">
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
      </div>

      <div className="secondSec">
        <Card>
          <Image src="/logo.svg" alt="hamburger" width="80" height="70" />
          <div className="cardDiv">
            <p className="pmdLink">PocketMD</p>
            <a className="pmdLink2">visit pocketmd.ca</a>
          </div>
        </Card>
      </div>
    </Foot>
  )
}

export default Footer