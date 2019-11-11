import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Navbar from '../Navbar';
import ComponentsPickerContainer from '../ComponentsPicker';
import ComponentsPreview from '../ComponentsPreview';
import ComponentFormWrapper from '../ComponentForms';

import {
  updateComponent,
  removeComponent,
} from '../../store/components/actions';

export const Layout = ({
  currentlyEdited,
  onRemoveClick,
  onSubmit,
}) => (
  <Fragment>
    <Navbar />
    <div className="d-flex">
      <ComponentsPreview />
      <ComponentsPickerContainer />
    </div>
    {currentlyEdited && (
      <ComponentFormWrapper
        layout={currentlyEdited.layout}
        onRemoveClick={() => onRemoveClick(currentlyEdited.id)}
        onSubmit={values => onSubmit(currentlyEdited.id, values)}
        values={currentlyEdited.values}
      />
    )}
  </Fragment>
);

Layout.propTypes = {
  currentlyEdited: PropTypes.shape({}),
  onRemoveClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  currentlyEdited: null,
};

const mapStateToProps = state => ({
  currentlyEdited: state.components.currentlyEdited,
});

const mapDispatchToProps = dispatch => ({
  onRemoveClick: id => dispatch(removeComponent(id)),
  onSubmit: (id, values) => dispatch(updateComponent(id, { values })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
