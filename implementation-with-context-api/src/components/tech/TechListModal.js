import React, { useEffect, useContext } from "react";
import TechItem from "./TechItem";

import TechContext from "../../context/techs/techContext";

const TechListModal = () => {
  const techContext = useContext(TechContext);
  const { getTechs, techs, loading } = techContext;

  useEffect(() => {
    getTechs();

    //eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
