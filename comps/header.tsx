import Link from 'next/link'
import { Head, Button, Logo } from '../styles/comps/Header.styled'
import Image from 'next/image'

const Header = () => {
  return (
    <Head>
      <Link href="/">
        <Logo>PocketMD Blog</Logo>
      </Link>

      {/* <div> */}
        <Button>
          APPOINTMENTS v
        </Button>
        <Link href="/">
          <Image
            src="/hamburger-button.png"
            alt="hamburger"
            width="35"
            height="1"
          />
        </Link>
      {/* </div> */}
    </Head>
  )
}

export default Header
