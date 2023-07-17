import React, { FC, PropsWithChildren } from 'react';
import { Header } from '@boxfusion/header';
import { Footer } from '@boxfusion/footer';

export const BoxLayout: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
