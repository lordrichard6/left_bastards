import styled from "styled-components";
import breakpoint from "../../assets/variables/breakpoints";

export const Colors = {
    primary: '#caa82f',
    secondary: '#1d2124',
    white:'#fff'
}

export const TitleBig = styled.h1`
  z-index: 10;
  font-size: 64px;
  font-weight: 400;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${Colors.white};
  text-shadow: ${Colors.dark} 1px 0 10px;

  @media screen and (${breakpoint.device.mobile}) {
    font-size: 48px;
    text-align: center;
    line-height: 46px;
  }
  @media screen and (${breakpoint.device.desktop}) {
    font-size: 72px;
    letter-spacing: 4px;
  }
`;

export const TitleMain = styled.h1`
  font-size: 48px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${(props) => props.color};
  margin: 1rem 0;

  @media screen and (${breakpoint.device.mobile}) {
    font-size: 36px;
    text-align: center;
  }
  @media screen and (${breakpoint.device.tablet}) {
    text-align: center;
    width: 80%;
  }

  @media screen and (${breakpoint.device.desktop}) {
    font-size: 64px;
    /* letter-spacing: 1rem; */
  }
`;

export const TitleSection = styled.h2`
  font-size: 36px;
  font-weight: 400;
  color: ${(props) => props.color};
  text-decoration: underline;
  letter-spacing: 1px;
  margin: 2rem 0;

  @media screen and (${breakpoint.device.mobile}) {
    font-size: 30px;
    text-align: center;
    margin: 1rem 0;
  }

  @media screen and (${breakpoint.device.desktop}) {
    font-size: 42px;
    letter-spacing: 2px;
  }
`;

export const TitleSmall = styled.h3`
  font-size: 28.8px;
  font-weight: 400;
  /* letter-spacing: 1px; */
  color: ${(props) => props.color};
  margin: 1rem 0;

  @media screen and (${breakpoint.device.mobile}) {
    text-align: center;
  }

  @media screen and (${breakpoint.device.desktop}) {
    font-size: 32px;
    letter-spacing: 2px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.color};

  @media screen and (${breakpoint.device.desktop}) {
    font-size: 24px;
  }
`;

export const TextSmall = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.color};

  @media screen and (${breakpoint.device.mobile}) {
    font-size: 14px;
  }
`;

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  @media screen and (${breakpoint.device.tablet}) {
    margin: 2rem 0;
  }
  @media screen and (${breakpoint.device.desktop}) {
    margin: 8rem 0;
  }
`;

export const SectionContainerBlue = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  background: url("/pattern.png"), ${Colors.primary};
  color: ${(props) => props.color};

  @media screen and (${breakpoint.device.tablet}) {
    padding: 4rem 0;
  }
  @media screen and (${breakpoint.device.desktop}) {
    padding: 8rem 0;
  }
`;