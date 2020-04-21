import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deleteTechs } from "../../actions/techActions";

const TechItem = ({ tech, deleteTechs }) => {
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a
          href='#!'
          className='secondary-content'
          onClick={() => deleteTechs(tech.id)}
        >
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default connect(null, { deleteTechs })(TechItem);
