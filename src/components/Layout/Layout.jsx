import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Додаємо імпорт toast
import {
  FooterContainer,
  Container,
  HeaderContainer,
  Link,
  Logo,
  MainContainer,
  BackgroundLayer,
  FooterStylesDiv,
} from './Layout.styled';
import { Suspense, useEffect, useState, useCallback } from 'react';
import Spinner from '../Spinner/Spinner';
import { ethers } from 'ethers';

import 'react-toastify/dist/ReactToastify.css';
import logoImage from '../../assets/logo.webp';

const Layout = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const initializeProvider = async () => {
      if (window.ethereum) {
        const tempProvider = new ethers.BrowserProvider(window.ethereum);
        setProvider(tempProvider);
        // setIsWalletConnected(true); // Гаманець підключено, встановлюємо значення на true
      } else {
        toast.error('MetaMask не знайдено. Будь ласка, встановіть MetaMask.');
      }
    };

    initializeProvider();
  }, []);

  // Використовуємо useCallback для memoization функції getBalance
  const getBalance = useCallback(
    async (address) => {
      try {
        const balance = await provider.getBalance(address);

        // Конвертуємо баланс з вей в ефіри
        const formattedBalance = ethers.formatEther(balance);
        toast.success('Баланс сформовано: ' + formattedBalance); // Змінюємо на toast

        setWalletBalance(formattedBalance);
      } catch (error) {
        toast.error('Помилка отримання балансу: ' + error.message); // Змінюємо на toast
      }
    },
    [provider]
  );

  // Використовуємо useCallback для memoization функції connectToMetaMask
  const connectToMetaMask = useCallback(async () => {
    if (provider) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });

        if (accounts.length > 0) {
          setWalletAddress(getSecurityFormattedAddress(accounts[0]));
          getBalance(accounts[0]);
        } else {
          toast.error('В MetaMask не знайдено аккаунтів.'); // Змінюємо на toast
        }

        // const signer = provider.getSigner();
        // setSigner(signer);
      } catch (error) {
        toast.error('Помилка підключення до MetaMask: ' + error.message); // Змінюємо на toast
      }
    }
  }, [getBalance, provider]);

  const getSecurityFormattedAddress = (address) => {
    // Залишаємо лише перші 6 символів та останні 4 символи адреси
    const firstPart = address.slice(0, 5);
    const lastPart = address.slice(address.length - 4);

    // Замінюємо середину адреси на зірочки (****)
    const securityFormattedAddress = `${firstPart}...${lastPart}`;

    toast.success('Ваша адреса: ' + securityFormattedAddress); // Змінюємо на toast
    return securityFormattedAddress;
  };

  useEffect(() => {
    console.log(walletAddress, walletBalance);
  }, [walletAddress, walletBalance]);

  return (
    <>
      <ToastContainer />
      <BackgroundLayer>
        <Container>
          <HeaderContainer>
            <Logo to="/">
              <img src={logoImage} alt="КриптоГаманець 2000" />
            </Logo>
            <nav>
              <Link to="/">Home</Link>
              <Link onClick={connectToMetaMask} to="/wallet">
                {walletAddress && walletBalance
                  ? `${Number(walletBalance).toFixed(3)} • ${walletAddress}`
                  : 'Connect wallet'}
              </Link>
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
    </>
  );
};

export default Layout;
