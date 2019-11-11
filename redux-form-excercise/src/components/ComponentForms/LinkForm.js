import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, propTypes } from 'redux-form';

import Actions from './Actions';

const LinkForm = ({
  children,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="component-field">
      <label className="component-field__label">
        label
      </label>
      <Field
        autoComplete="off"
        className="component-field__input"
        component="input"
        name="label"
        type="text"
      />
      <label className="component-field__label">
        href
      </label>
      <Field
        autoComplete="off"
        className="component-field__input"
        component="input"
        name="href"
        type="text"
      />
    </div>
    <Actions>
      {children}
    </Actions>
  </form>
);

LinkForm.propTypes = {
  children: PropTypes.node.isRequired,
  ...propTypes,
};

export default reduxForm({
  enableReinitialize: true,
  form: 'LinkForm',
})(LinkForm);
