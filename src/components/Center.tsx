import React from 'react';
import styled from 'styled-components/native';

interface CenterProps {}

export const Center: React.FC<CenterProps> = ({children}) => {
  return <CenteredView>{children}</CenteredView>;
};

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
