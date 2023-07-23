import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './components/Main/Main';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Main />
    </QueryClientProvider>
  );
}

export default App;
