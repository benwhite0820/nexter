import './button.style.scss';
import { Josefin_Sans } from 'next/font/google';

import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const josefin = Josefin_Sans({ subsets: ['latin'] });

const Button = ({ children, className = '' }: Props) => {
  return (
    <button className={`btn ${className} ${josefin.className}`}>
      {children}
    </button>
  );
};

export default Button;
