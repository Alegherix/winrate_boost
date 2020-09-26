import Header from '../components/nav/Header';
import Hero from '../components/Hero';
import Layout from '../utils/layout';
import Main from '../components/Main';
import styled from 'styled-components';
import FeatureCards from '../components/FeatureCard';
import SniperImg from '../assets/sniper.jpg';
import Features from '../components/Features';

const Navigation = styled.nav`
  height: 100vh;
`;

export default function Home() {
  return (
    <Layout>
      <Navigation>
        <Header />
        <Hero />
      </Navigation>
      <Main />
      <Features />
    </Layout>
  );
}
