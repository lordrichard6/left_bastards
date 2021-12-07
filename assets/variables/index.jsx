import styled from "styled-components";

export const Colors = {
  primary: "#caa82f",
  secondary: "#1d2124",
  white: "#fff",
  dark: "#1d2124",
};

export const TitleMain = styled.h1`
  font-size: 48px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${(props) => props.color};
  margin: 1rem 0;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }
  @media screen and (max-width: 1024px) {
    text-align: center;
    width: 80%;
  }

  @media screen and (min-width: 2024px) {
    font-size: 64px;
    /* letter-spacing: 1rem; */
  }
`;

export const TitleFooter = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: ${(props) => props.color};
  /* text-decoration: underline; */
  /* letter-spacing: 1px; */
  margin: 2rem 0;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    text-align: center;
    margin: 1rem 0;
  }

  @media screen and (min-width: 2024px) {
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

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (min-width: 2024px) {
    font-size: 32px;
    letter-spacing: 2px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.color};

  @media screen and (min-width: 2024px) {
    font-size: 24px;
  }
`;

export const TextSmall = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.color};

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const HeaderContainer = styled.header`
  position: relative;
  height: ${(props) => props.height};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      0deg,
      rgba(29, 33, 36, 0.6),
      rgba(29, 33, 36, 0.6)
    ),
    url(${(props) => props.image});
  background-position: center;
  background-size: cover;

  @media only screen and (max-width: 768px) {
    height: 50rem;
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

  @media screen and (max-width: 1024px) {
    padding: 4rem 0;
  }
  @media screen and (min-width: 2024px) {
    padding: 8rem 0;
  }
`;
