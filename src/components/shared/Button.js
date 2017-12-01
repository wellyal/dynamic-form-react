import React from 'react';
import styled, {keyframes, css} from 'styled-components';

export const Button = props => {
  return <RegularButton {...props}>Button</RegularButton>;
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const RegularButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 18px;
  cursor: pointer;
  border: 0;
  font-size: 15px;
  background-color: ${props => props.theme.buttonEnabled.background};
  color: ${props => props.theme.buttonEnabled.color};

  &:hover {
    opacity: 0.7;
  }

  ${props =>
    props.disabled &&
    css`
      background-color: ${props => props.theme.buttonDisabled.background};
      cursor: not-allowed;
    `};

  ${props =>
    props.loading &&
    css`
      font-size: 0;
      cursor: not-allowed;

      &:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 18px;
        height: 18px;
        border: 2px solid #fff;
        border-bottom: 2px solid transparent;
        border-right: 2px solid transparent;
        border-radius: 50%;
        animation: ${spin} 1s linear infinite;
      }
    `};
`;
