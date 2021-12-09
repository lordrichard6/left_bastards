import styled from "styled-components";

import { Colors } from "../../assets/variables";
import Header from "../../components/_singleMember/Header";
import Id from "../../components/_singleMember/Main/id";
import About from "../../components/_singleMember/Main/about";
import Car from "../../components/_singleMember/Main/car";
import Gallery from "../../components/_singleMember/Main/gallery";
import { members } from "../../assets/data/members";

export async function getStaticProps(context) {
  const { params } = context;
  const membersData = members.find((item) => item.slug === params.slug)

  return {
    props: membersData
  };
}

export async function getStaticPaths() {
  const membersData = members.map((item) => ({params: {slug: item.slug,},}))

  return {
    paths: membersData,
    fallback: false,
  };
}

export default function SingleMember({ ...data}) {
  return (
    <>
      <Header {...data} />
      <SectionContainer>
        <Id {...data} />
        <About {...data} />
        {/* <Car /> */}
        {/* <Gallery /> */}
      </SectionContainer>
    </>
  );
}

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Colors.primary};
  background: ${Colors.secondary};
  font-family: Poppins;
  font-weight: 800;
  padding: 2rem 0;
`;
