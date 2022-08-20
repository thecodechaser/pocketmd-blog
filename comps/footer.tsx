import { Foot } from '../styles/comps/Footer.styled'
import Image from 'next/image'

const Footer = () => {
  return (
  <Foot>
     <Image
            src="/logo.svg"
            alt="hamburger"
            width="100"
            height="100"
          />
  </Foot>
  )
}

export default Footer
