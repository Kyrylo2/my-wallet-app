import { purple } from '@mui/material/colors';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  flex: 1 1 0%;
  /* display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: flex-start;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 30px;
  width: 400px;
  margin-right: auto; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const HomeHeroContainer = styled.div`
  grid-area: 1 / 1 / 6 / 4;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const HomeTextMain = styled.h1`
  color: ${purple[50]};
  font-weight: bold;
  font-size: 3rem;
  z-index: 1;
`;

export const HomeTextSecondary = styled.h2`
  color: ${purple[100]};
  font-weight: 500;
  font-size: 2rem;
`;

export const HomeTextAction = styled.button``;

export const HomeImageDivContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  pointer-events: none;
`;

export const HomeImageDiv = styled.div`
  grid-area: 1 / 4 / 6 / 6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeImage = styled.img`
  max-width: -webkit-fill-available;
  height: auto;
`;
