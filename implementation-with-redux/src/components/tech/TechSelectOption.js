import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";

const TechSelectOption = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();

    //eslint-disable-nect-line
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map((tech) => (
      <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
        {tech.firstName} {tech.lastName}{" "}
      </option>
    ))
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOption);
