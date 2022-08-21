import Link from 'next/link'
import { Head, Div, Button, Logo } from '../styles/comps/Header.styled'
import Image from 'next/image'

const Header = () => {
  return (
    <Head>
      <Link href="/">
        <Logo>PocketMD Blog</Logo>
      </Link>

      <Div className="div2">
        <Button>APPOINTMENTS v</Button>
        <Link href="/">
          <Image
            src="/hamburger-icon.png"
            alt="hamburger"
            width="35"
            height="1"
          />
        </Link>
      </Div>
    </Head>
  )
}

export default Header
