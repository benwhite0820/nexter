import './heading.style.scss';
import { Josefin_Sans } from 'next/font/google';
import React from 'react';

type Props = {
  headingLevel: 'h2' | 'h3' | 'h4';
  className?: string;
  children: React.ReactNode;
  color?: 'dark' | 'light';
};

const josefin = Josefin_Sans({ subsets: ['latin'] });

const Heading = ({ headingLevel, children, className = '', color }: Props) => {
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
};

export default Heading;
