import Link from 'next/link'
import { Head } from '../styles/comps/Header.styled'

const Header = () => {
  return (
    <Head>
      <Link href="/">
        <a>PocketMD Blog</a>
      </Link>
    </Head>
  )
}

export default Header
