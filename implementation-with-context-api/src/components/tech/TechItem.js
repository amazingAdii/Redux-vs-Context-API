import React, { useContext } from "react";

import TechContext from "../../context/techs/techContext";

const TechItem = ({ tech }) => {
  const techContext = useContext(TechContext);
  const { deleteTechs } = techContext;

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

export default TechItem;
