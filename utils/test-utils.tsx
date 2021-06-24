// test-utils.js
import React, {JSXElementConstructor, ReactElement} from 'react';
import {render} from '@testing-library/react-native';
import {AuthStateProvider} from '../src/state/AuthProvider';
import MockedNavigator from './MockedNavigator';

const AllTheProviders: React.FC<{
  ui: ReactElement<any, string | JSXElementConstructor<any>>;
}> = ({children, ui}) => {
  return <AuthStateProvider>{children}</AuthStateProvider>;
};

const customRender = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  options = {},
) => render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
