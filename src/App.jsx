import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
    </QueryClientProvider>
  );
}

export default App;
