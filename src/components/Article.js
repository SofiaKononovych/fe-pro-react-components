import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ articleName, articleText }) => {
  return (
    <li className="list__item">
      <h2>{articleName}</h2>
      <p>{articleText}</p>
    </li>
  );
};

Article.protoType = {
  articleName: PropTypes.string.isRequired,
  articleText: PropTypes.string.isRequired,
};

export default Article;
