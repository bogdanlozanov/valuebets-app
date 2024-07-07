'use client';

import { ReactNode } from 'react';
import GlobalStyles from '../components/GlobalStyles';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Livebets</title>
      </head>
      <body>
        <GlobalStyles />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
