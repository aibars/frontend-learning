import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';
import H5 from './H5';
import H6 from './H6';
import P from './P';
import A from './A';
import Img from './Img';
import Iframe from './Iframe';

const Components = {
  1: H1,
  2: H2,
  3: H3,
  4: H4,
  5: H5,
  6: H6,
  7: P,
  8: A,
  9: Img,
  10: Iframe,
};

const ComponentsWrapper = ({
  isEdited,
  layout,
  onComponentEdit,
  ...props
}) => {
  if (!layout) {
    return null;
  }

  const Component = Components[layout];

  const wrapperClass = classNames(
    'components-wrapper',
    { 'components-wrapper--active': isEdited },
  );

  return Component
    ? (
      <div
        className={wrapperClass}
        onClick={onComponentEdit}
      >
        <Component layout={layout} {...props} />
      </div>
    )
    : null;
};

ComponentsWrapper.propTypes = {
  isEdited: PropTypes.bool.isRequired,
  layout: PropTypes.number,
  onComponentEdit: PropTypes.func.isRequired,
};

ComponentsWrapper.defaultProps = {
  layout: null,
};

export default ComponentsWrapper;
