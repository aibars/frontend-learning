import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, propTypes } from 'redux-form';

import Actions from './Actions';

const TextAreaForm = ({
  children,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="component-field">
      <label className="component-field__label">
        text
      </label>
      <Field
        autoComplete="off"
        className="component-field__input"
        component="textarea"
        name="text"
      />
    </div>
    <Actions>
      {children}
    </Actions>
  </form>
);

TextAreaForm.propTypes = {
  children: PropTypes.node.isRequired,
  ...propTypes,
};

export default reduxForm({
  enableReinitialize: true,
  form: 'TextAreaForm',
})(TextAreaForm);
