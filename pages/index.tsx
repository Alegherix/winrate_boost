import Header from '../components/nav/Header';
import Hero from '../components/Hero';
import Layout from '../utils/layout';
import Main from '../components/Main';
import styled from 'styled-components';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Navigation = styled.nav`
  height: 100vh;
  /* max-width: 1100px; */
  /* margin: auto; */
`;

export default function Home() {
  return (
    <Layout>
      <Navigation>
        <Header />
        <Hero />
      </Navigation>
      <Features />
      <Main />
      <Footer />
    </Layout>
  );
}
