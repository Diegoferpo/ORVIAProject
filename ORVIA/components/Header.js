
import React from 'react';
import { View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const StatusBarCustom = ({ backgroundColor = '#022B3A', style = 'light' }) => {
  return (
    <View style={{
      height: Platform.OS === 'ios' ? 44 : 24,
      backgroundColor,
    }}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        style={style} 
      />
    </View>
  );
};

export default StatusBarCustom;
