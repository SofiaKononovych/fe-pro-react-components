import React from 'react';
import NavItem from './NavItem';

const Header = () => {
  const navContent = [
    {
      name: 'Home',
      id: 1,
      link: '/',
    },
    {
      name: 'About us',
      id: 2,
      link: '/#about',
    },
    {
      name: 'Contact us',
      id: 3,
      link: '/#contact',
    },
    {
      name: 'Help page',
      id: 4,
      link: '/#help',
    },
  ];
  const navComponents = navContent.map(({ name, id, link }) => {
    return <NavItem name={name} key={id} link={link} />;
  });

  return (
    <header>
      <div className="container">
        <a href="" className="logo">
          My logo
        </a>
        <ul className="nav-list">{navComponents}</ul>
      </div>
    </header>
  );
};

export default Header;
