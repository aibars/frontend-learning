import React from 'react';
import PropTypes from 'prop-types';

const Actions = ({ children }) => (
  <div className="d-flex">
    <button
      className="component-button"
      type="submit"
    >
      Apply
    </button>
    {children}
  </div>
);

Actions.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Actions;
