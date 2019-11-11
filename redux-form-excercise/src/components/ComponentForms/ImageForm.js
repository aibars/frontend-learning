import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, propTypes } from 'redux-form';

import Actions from './Actions';

const ImageForm = ({
  children,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="component-field">
      <label className="component-field__label">
        alt
      </label>
      <Field
        autoComplete="off"
        className="component-field__input"
        component="input"
        name="alt"
        type="text"
      />
      <label className="component-field__label">
        src
      </label>
      <Field
        autoComplete="off"
        className="component-field__input"
        component="input"
        name="src"
        type="text"
      />
    </div>
    <Actions>
      {children}
    </Actions>
  </form>
);

ImageForm.propTypes = {
  children: PropTypes.node.isRequired,
  ...propTypes,
};

export default reduxForm({
  enableReinitialize: true,
  form: 'ImageForm',
})(ImageForm);
