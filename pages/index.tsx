import RegisterNavbar from '../components/nav/RegisterNavbar';
import Hero from '../components/Hero';
import Layout from '../utils/layout';
import Main from '../components/Main';
import styled from 'styled-components';

const Navigation = styled.nav`
  height: 100vh;
`;

export default function Home() {
  return (
    <Layout>
      <Navigation>
        <RegisterNavbar />
        <Hero />
      </Navigation>
      <Main />
    </Layout>
  );
}
