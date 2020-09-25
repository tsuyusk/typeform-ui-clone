import React, { useEffect } from 'react';

import GlobalStyles from './styles/Global';

import Home from './pages/Home';

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 1.757 });
  }, []);
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
};

export default App;
