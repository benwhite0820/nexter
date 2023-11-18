import Button from '../button/button.component';
import Heading from '../heading/heading.component';
import './header.style.scss';

const Header = () => {
  return (
    <header className="header">
      <img src="/logo.png" alt="Nexter logo" className="header__logo" />
      <Heading headingLevel="h3">Your own home</Heading>
      <Heading headingLevel="h1">The ultimate personal freedom</Heading>
      <Button className="header__btn">View our properties</Button>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src="/logo-bbc.png" alt="Seen on logo 1" />
        <img src="/logo-forbes.png" alt="Seen on logo 2" />
        <img src="/logo-techcrunch.png" alt="Seen on logo 3" />
        <img src="/logo-bi.png" alt="Seen on logo 4" />
      </div>
    </header>
  );
};

export default Header;
