import React from 'react';
import {
  HomeContainer,
  HomeImage,
  HomeImageDiv,
  HomeImageDivContainer,
  HomeHeroContainer,
  HomeTextMain,
  HomeTextSecondary,
} from './Home.styled';
import { Button, Link } from '@mui/joy';
import { purple } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';

import WalletImage from '../../assets/images/HomeImages/img_wallet.webp';

const Home = () => {
  return (
    <HomeContainer>
      <HomeImageDiv>
        <HomeImage src={WalletImage} alt="logo" />
      </HomeImageDiv>
      <HomeHeroContainer>
        <HomeTextMain>
          Welcome to Trustly Crypto Wallet, the ultimate blockchain wallet!
        </HomeTextMain>
        <HomeTextSecondary>
          Enjoy secure transactions, easy management of your assets, and
          streamlined access to decentralized applications.
        </HomeTextSecondary>
        {/* <HomeTextAction>Start your exciting journey now!</HomeTextAction> */}
        <Button
          component={NavLink}
          to="/tweets"
          variant="outlined"
          sx={{
            // m: 1,
            minWidth: 120,
            color: purple[50],
            borderColor: purple[200],
            borderWidth: '1px',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '400',
            '&.Mui-focused': {
              color: purple[800],
            },
            '&:hover': {
              borderColor: purple[600],
              borderWidth: '1px',
              backgroundColor: purple[600],
              color: purple[50],
            },
          }}
        >
          Start your exciting journey now!
        </Button>
        <Button
          component={Link}
          variant="outlined"
          href="https://www.linkedin.com/in/savchenko-kyrylo/"
          sx={{
            // m: 1,
            minWidth: 120,
            color: purple[50],
            borderColor: purple[200],
            borderWidth: '1px',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '400',
            '&.Mui-focused': {
              color: purple[800],
            },
            '&:hover': {
              borderColor: purple[600],
              borderWidth: '1px',
              backgroundColor: purple[600],
              color: purple[50],
              textDecorationLine: 'none',
            },
          }}
        >
          And join me on LinkedIn
        </Button>
      </HomeHeroContainer>
    </HomeContainer>
  );
};

export default Home;
