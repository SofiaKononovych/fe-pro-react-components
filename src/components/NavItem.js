import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({ name, link }) => {
  return (
    <li className="nav-list__item">
      <a href={link} className="">
        {name}
      </a>
    </li>
  );
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavItem;
