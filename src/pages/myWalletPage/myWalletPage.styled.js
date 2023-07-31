import styled from 'styled-components';
import { purple } from '@mui/material/colors';
import { Button, TextField } from '@mui/material';

export const FormButton = styled(Button)`
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;

  color: ${purple[50]};
  font-weight: 400;
  border: 1px solid ${purple[200]};

  &.active,
  &:hover {
    color: #fff9f9;
    background-color: ${purple[600]};
    border: 1px solid ${purple[600]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${purple[300]}; // Adding a custom focus style with box shadow
    border: 1px solid ${purple[300]};
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-height: fit-content;
  padding: 25px;
  margin: auto;
  min-width: fit-content;
  width: 350px;
  min-height: 250px;
  background-color: ${purple[400]};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  border: 1px solid ${purple[200]};

  @media (max-width: 480px) {
    /* Mobile devices */
    width: 90%;
    padding: 15px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    /* iPads, Tablets */
    width: 70%;
    padding: 20px;
  }

  @media (min-width: 769px) {
    /* Small screens, laptops */
    width: 60%;
    padding: 25px;
  }
`;

export const TextFieldStyled = styled(TextField)`
  /* border-radius: 4px; */
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  color: ${purple[50]}; // Use a light shade of purple for the text color.
  /* border: 1px solid ${purple[200]}; // Use the same lighter shade of purple for the border. */

  & .MuiInputLabel-root {
    color: ${purple[50]};
  }

  & .MuiInputBase-input {
    color: ${purple[50]};

    &.Mui-focused {
      color: ${purple[200]};
    }
  }

  & label.Mui-focused {
    color: ${purple[200]}; // Use the lighter shade when the label is focused.
  }

  /* & .MuiInput-underline:after {
    border-bottom-color: ${purple[200]}; // Use the lighter shade for the underline when the input is focused.
  } */

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${purple[200]}; // Use the lighter shade for the input fieldset border.
    }
  }

  &:hover .MuiOutlinedInput-root fieldset,
  &:focus .MuiOutlinedInput-root fieldset {
    border-color: ${purple[200]}; // Use the lighter shade for the input fieldset border on hover.
  }

  &.Mui-focused .MuiOutlinedInput-root fieldset {
    border-color: ${purple[200]}; // Use the lighter shade for the input fieldset border when focused.
  }
`;
