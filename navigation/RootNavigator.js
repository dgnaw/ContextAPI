import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppContext } from '../context/AppContext';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

export default function RootNavigator() {
  const { isLoading, userToken } = useContext(AppContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FAFAFA' }}>
        <ActivityIndicator size="large" color="#4A43EC" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}