import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, propTypes } from 'redux-form';

import Actions from './Actions';

const IframeForm = ({
  children,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="component-field">
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
    <div className="component-field">
      <label className="component-field__label">
        width
      </label>
      <Field
        autoComplete="off"
        className="component-field__input"
        component="input"
        name="width"
        type="number"
      />
    </div>
    <div className="component-field">
      <label className="component-field__label">
        width
      </label>
      <Field
        autoComplete="off"
        className="component-field__input"
        component="input"
        name="height"
        type="number"
      />
    </div>
    <Actions>
      {children}
    </Actions>
  </form>
);

IframeForm.propTypes = {
  children: PropTypes.node.isRequired,
  ...propTypes,
};

export default reduxForm({
  enableReinitialize: true,
  form: 'IframeForm',
})(IframeForm);
