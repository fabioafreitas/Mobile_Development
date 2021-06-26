import React from 'react';
import Navigator from './routes/AppNavigator';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

/**
 * tema customizado do react-native-paper
 * estudar depois como coloca-lo em todos os componentes do app
 */
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f'
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  );
}