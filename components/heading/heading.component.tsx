import './heading.style.scss';
import { Josefin_Sans } from 'next/font/google';
import React from 'react';

type Props = {
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  className?: string;
  children: React.ReactNode;
  color?: 'dark' | 'light';
};

const josefin = Josefin_Sans({ subsets: ['latin'] });

const Heading = ({ headingLevel, children, className = '', color }: Props) => {
  if (headingLevel === 'h1')
    return (
      <h1 className={`${className} ${color} ${josefin.className} heading-1`}>
        {children}
      </h1>
    );

  if (headingLevel === 'h2')
    return (
      <h2 className={`${className} ${color} heading-2 ${josefin.className}`}>
        {children}
      </h2>
    );

  if (headingLevel === 'h3')
    return (
      <h3 className={`${className} ${color} heading-3 ${josefin.className}`}>
        {children}
      </h3>
    );

  if (headingLevel === 'h4')
    return (
      <h4 className={`${className} ${color} heading-4 ${josefin.className}`}>
        {children}
      </h4>
    );

  if (headingLevel === 'h5')
    return (
      <h5 className={`${className} ${color} heading-5 ${josefin.className}`}>
        {children}
      </h5>
    );
};

export default Heading;
