import React from 'react';
import PropTypes from 'prop-types';

const Iframe = ({ values }) => (
  <iframe
    height={values.height}
    src={values.src}
    width={values.width}
  />
);

Iframe.propTypes = {
  values: PropTypes.shape({
    height: PropTypes.number,
    src: PropTypes.string,
    width: PropTypes.number,
  }).isRequired,
};

export default Iframe;
