import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import ComponentsWrapper from '../Components';

import { setEditedComponent } from '../../store/components/actions';

const ComponentsPreview = ({
  components,
  currentlyEdited,
  onComponentEdit,
}) => (
  <div className="components-preview">
    {components.map(component => (
      <ComponentsWrapper
        key={component.id}
        isEdited={get(component, 'id') === get(currentlyEdited, 'id') && !isEmpty(component.values)}
        onComponentEdit={() => onComponentEdit(component)}
        {...component}
      />
    ))}
  </div>
);

ComponentsPreview.propTypes = {
  components: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentlyEdited: PropTypes.shape({}),
  onComponentEdit: PropTypes.func.isRequired,
};

ComponentsPreview.defaultProps = {
  currentlyEdited: {},
};

const mapStateToProps = state => ({
  components: state.components.items,
  currentlyEdited: state.components.currentlyEdited,
});

const mapDispatchToProps = dispatch => ({
  onComponentEdit: component => dispatch(setEditedComponent(component)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComponentsPreview);
