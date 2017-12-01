import React from 'react';
import styled, {keyframes} from 'styled-components';

export const Loader = () => (
  <LoaderWrapper>
    <LoaderContent>
      <Spin />
      <Text>Carregando</Text>
    </LoaderContent>
  </LoaderWrapper>
);

const LoaderWrapper = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoaderContent = styled.div`
  text-align: center;
  width: 80px;
  margin: 0 auto;
`;

const Text = styled.p`
  color: #acacac;
  font-size: 15px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spin = styled.div`
  display: inline-block;
  margin-bottom: 5px;
  border: 2px solid transparent;
  border-top: 2px solid ${props => props.theme.success};
  border-left: 2px solid ${props => props.theme.success};
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: ${spin} 1s linear infinite;
`;
