import { Outlet } from 'react-router-dom';
import {
  FooterContainer,
  Container,
  HeaderContainer,
  Link,
  Button,
  Logo,
  MainContainer,
  BackgroundLayer,
  FooterStylesDiv,
} from './Layout.styled';
import { Suspense } from 'react';
import Spinner from '../Spinner/Spinner';

const Layout = () => {
  async function requestAccount() {
    console.log('requestAccount');
  }
  return (
    <BackgroundLayer>
      <Container>
        <HeaderContainer>
          <Logo to="/">Crypto Wallet</Logo>
          <nav>
            <Link to="/">Home</Link>

            <Link to="/wallet">My wallet</Link>
            <Button onClick={requestAccount}>Connect wallet</Button>
          </nav>
        </HeaderContainer>
        <MainContainer>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </MainContainer>
        <FooterContainer>
          <FooterStylesDiv>
            Created by{' '}
            <a href="https://www.linkedin.com/in/savchenko-kyrylo/">
              Kyrylo Savchenko
            </a>
          </FooterStylesDiv>
        </FooterContainer>
      </Container>
    </BackgroundLayer>
  );
};

export default Layout;
