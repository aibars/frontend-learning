import React from 'react';
import PropTypes from 'prop-types';

const H2 = ({ values }) => <h2>{values.text}</h2>;

H2.propTypes = {
  values: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
};

export default H2;
