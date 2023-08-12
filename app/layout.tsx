import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => (
  <html lang="ja">
    <head />
    <body>{children}</body>
  </html>
);

export default RootLayout;
