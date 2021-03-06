import styled from "styled-components";
import Image from "next/image";

import { Colors, TitleFooter } from "../../assets/variables";
import QR from "../../public/Ficheiro_000.png";

export default function Contact() {

  return (
    <FooterSection>
      <TitleFooter color={Colors.secondary} className="margin">contact</TitleFooter>
      <QRWrapper>
        <Image src={QR} alt="qr code for whatsapp left bastards" />
      </QRWrapper>
    </FooterSection>
  );
}

const FooterSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 764px) {
    order: 1;
    width: 100%;
  }

  .margin {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const QRWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (min-width: 2024px) {
    width: 200px;
    height: 200px;
  }
`;
