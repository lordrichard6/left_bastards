import Header from "../components/_homepage/Header";
import AboutUs from "../components/_homepage/AboutUs";
import Gallery from "../components/_homepage/Gallery";
import Videos from "../components/_homepage/Videos";
import Sponsors from "../components/_homepage/Sponsors";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Header />
      <AboutUs />
      <Gallery />
      <Videos />
      <Sponsors />
    </Layout>
  );
}
