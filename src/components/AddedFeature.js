import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions/Action'
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
       onClick={() => props.removeFeature(props.feature)}
      >
        X
        </button>
      {props.feature.name}
    </li>
  );
};

export default connect(() => {}, { removeFeature })(AddedFeature)
