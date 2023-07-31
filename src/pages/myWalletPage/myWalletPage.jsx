import React, { useEffect, useState } from 'react';

import { ethers } from 'ethers';
import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import { purple } from '@mui/material/colors';
import { TextFieldStyled, FormContainer } from './myWalletPage.styled';
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';

const MyWalletPage = () => {
  const [transferAddress, setTransferAddress] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    const initializeProvider = async () => {
      if (window.ethereum) {
        const tempProvider = new ethers.BrowserProvider(window.ethereum);
        setProvider(tempProvider);
      } else {
        console.error('MetaMask не знайдено. Будь ласка, встановіть MetaMask.');
      }
    };

    initializeProvider();
  }, []);

  useEffect(() => {
    const fetchSigner = async () => {
      if (provider) {
        const signer = await provider.getSigner();
        setSigner(signer);
      } else {
        console.log('Please provide your own signer');
        return;
      }
    };

    fetchSigner();
  }, [provider]);

  // console.log('Signer', signer);

  const isEthereumAddressValid = (address) => {
    const addressRegex = /^0x([A-Fa-f0-9]{40})$/;

    if (!addressRegex.test(address)) {
      return false; // Адреса не відповідає формату
    }

    // Перевірка Checksum
    const cleanAddress = address.toLowerCase().replace(/^0x/, '');
    const addressBytes = Uint8Array.from(cleanAddress.match(/.{1,2}/g), (hex) =>
      parseInt(hex, 16)
    );
    const addressHash = ethers.keccak256(addressBytes);
    for (let i = 0; i < 40; i++) {
      const addressChar = cleanAddress[i];
      const hashChar = addressHash[i];
      // Порівнюємо символи у нижньому регістрі
      if (
        (parseInt(hashChar, 16) > 7 &&
          addressChar !== addressChar.toLowerCase()) ||
        (parseInt(hashChar, 16) <= 7 &&
          addressChar !== addressChar.toUpperCase())
      ) {
        return false; // Адреса не пройшла перевірку Checksum
      }
    }

    return true; // Адреса відповідає формату та пройшла перевірку Checksum
  };

  const isValidTransferAmount = (amount) => {
    const parsedAmount = parseFloat(amount);
    const isFormattedForBlockchain = /^0\.[0-9]*[1-9][0-9]*$/.test(amount);
    console.log(
      '🚀 ~ file: myWalletPage.jsx:80 ~ isValidTransferAmount ~ isFormattedForBlockchain:',
      isFormattedForBlockchain
    );

    // Перевірка чи число має лише одну ненульову цифру після десяткової коми
    const hasOnlyOneDecimalPlace = /^[0-9]*\.[0-9]*[1-9][0-9]*$/.test(amount);
    console.log(
      '🚀 ~ file: myWalletPage.jsx:84 ~ isValidTransferAmount ~ hasOnlyOneDecimalPlace:',
      hasOnlyOneDecimalPlace
    );

    return (
      !isNaN(parsedAmount) &&
      isFormattedForBlockchain &&
      parsedAmount >= 0.000001 &&
      parsedAmount <= 100000 &&
      hasOnlyOneDecimalPlace
    );
  };

  async function sendCryptoCurrency() {
    if (!isValidTransferAmount(transferAmount)) {
      toast.error('Invalid transfer amount');
      return;
    }

    const value = ethers.parseUnits(transferAmount, 'ether');

    if (
      !ethers.isAddress(transferAddress) &&
      !isEthereumAddressValid(transferAddress)
    ) {
      toast.error('Invalid transfer address');
      return;
    }

    try {
      setLoadingButton(true);

      await toast.promise(
        signer.sendTransaction({
          to: transferAddress,
          value: value,
        }),
        {
          pending: 'Transaction is pending...',
          success: 'Transaction successful 👌',
          error: 'Transaction failed 🤯',
        }
      );

      setLoadingButton(false);
    } catch (error) {
      setLoadingButton(false);
      console.error('Error sending transaction:', error);
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    console.log('Transfer Address:', transferAddress);
    console.log('Transfer Amount:', transferAmount);

    sendCryptoCurrency();
  };

  return (
    <>
      {provider && signer && (
        <FormContainer onSubmit={handleFormSubmit}>
          <TextFieldStyled
            required
            label="Transfer Address"
            value={transferAddress}
            onChange={(event) => {
              setTransferAddress(event.target.value);
            }}
          />
          <TextFieldStyled
            required
            type="number"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            label="Amount"
            value={transferAmount}
            onChange={(event) => {
              setTransferAmount(`${event.target.value}`);
            }}
          />

          <LoadingButton
            loading={loadingButton}
            type="submit"
            variant="outlined"
            size="large"
            color="inherit"
            sx={{
              border: 1,
              borderColor: `${purple[200]}`,
              '&:hover': {
                borderColor: `${purple[200]}`,
              },
            }}
          >
            Submit
          </LoadingButton>
        </FormContainer>
      )}
    </>
  );
};

export default MyWalletPage;
