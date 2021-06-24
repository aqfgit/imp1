import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';

import {createContainer} from 'unstated-next';

interface User {
  username: string;
}

const useAuth = createContainer(() => {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    const fakeUser = {username: 'Bob'};
    setUser(fakeUser);
    AsyncStorage.setItem('user', JSON.stringify(fakeUser));
  };

  const logout = () => {
    setUser(null);
    AsyncStorage.removeItem('user');
  };

  return {user, login, logout};
});

export const AuthStateProvider = useAuth.Provider;
export const useAuthState = useAuth.useContainer;
