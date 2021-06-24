import React from 'react';
import {AuthStateProvider} from './state/AuthProvider';
import {Routes} from './Routes';

interface ProvidersProps {}

const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <AuthStateProvider>
      <Routes />
    </AuthStateProvider>
  );
};

export default Providers;
