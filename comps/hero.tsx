import { Div, H1, P } from '../styles/comps/Hero.styled'
import Image from 'next/image'

const Hero = () => {
  return (
    <Div>
      <div>
        <H1>Savoir Faire</H1>
        <P>
          it’s french. say it how it’s supposed to be said. it’ll make your
          mouth feel funny.
        </P>
      </div>

      <div>
        <Image src="/dr-img.png" alt="dr" width="450" height="250" />
      </div>
    </Div>
  )
}

export default Hero