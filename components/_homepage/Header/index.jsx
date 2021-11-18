import styled from 'styled-components'
import Image from 'next/image'

import breakpoint from "../../../assets/variables/breakpoints";
import background from '../../../public/images/header.jpg'

export default function Header() {
    return (
        <SectionContainer>
            <Background
                src={background}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt='header'
                priority
            />
            <Slogan>Always on the left</Slogan>
            <TitleExtra>LEFT BASTARDS</TitleExtra>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(29, 33, 36, 0.6), rgba(29, 33, 36, 0.6)), url(background);
`
const TitleExtra = styled.h1`
    color: #caa82f;
    font-size: 6rem;
    font-family: Poppins;
    font-weight: 800;
    font-style: normal;
    line-height: 100%;
    letter-spacing: 0.2em;
    margin: 0;

    @media only screen and (${breakpoint.device.mobile}) {
        font-size: 4rem;
        letter-spacing: 0;
        text-align: center;
    }
    @media only screen and (${breakpoint.device.desktop}) {
    font-size: 8rem;
    letter-spacing: 0.3em;
  }
`

const Slogan = styled.h2`
    color: #c4c4c4;
    font-size:2rem;
    font-weight: 800;
    font-style: normal;
    line-height: 100%;
    letter-spacing: 0.2em;
    margin: 2px;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);

    @media only screen and (${breakpoint.device.mobile}) {
        text-align: center;
        -ms-transform: translateX(0);
        transform: translateX(0);
    }
    @media only screen and (${breakpoint.device.desktop}) {
        font-size: 3rem;
        text-align: center;
    }

`

const Background = styled(Image)`
    z-index: -1;
`