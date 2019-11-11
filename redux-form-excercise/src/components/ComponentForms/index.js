import React from 'react';
import PropTypes from 'prop-types';

import TextForm from './TextForm';
import TextAreaForm from './TextAreaForm';
import LinkForm from './LinkForm';
import ImageForm from './ImageForm';
import IframeForm from './IframeForm';

const Components = {
  1: TextForm,
  2: TextForm,
  3: TextForm,
  4: TextForm,
  5: TextForm,
  6: TextForm,
  7: TextAreaForm,
  8: LinkForm,
  9: ImageForm,
  10: IframeForm,
};

const ComponentFormWrapper = ({
  layout,
  onRemoveClick,
  values,
  ...props
}) => {
  if (!layout) {
    return null;
  }

  const Component = Components[layout];

  return Component
    ? (
      <div className="component-form-wrapper">
        <Component
          initialValues={values}
          layout={layout}
          {...props}
        >
          <button
            className="component-button component-button--remove"
            onClick={onRemoveClick}
          >
            Remove
          </button>
        </Component>
      </div>
    )
    : null;
};

ComponentFormWrapper.propTypes = {
  layout: PropTypes.number,
  onRemoveClick: PropTypes.func.isRequired,
  values: PropTypes.shape({}),
};

ComponentFormWrapper.defaultProps = {
  layout: null,
  values: {},
};

export default ComponentFormWrapper;
