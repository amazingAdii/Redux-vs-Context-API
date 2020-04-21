import React, { useEffect, Fragment } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./components/layouts/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/tech/AddTechModal";
import TechListModal from "./components/tech/TechListModal";

import LogState from "./context/logs/logState";
import TechState from "./context/techs/techState";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <LogState>
      <TechState>
        <Fragment>
          <SearchBar />
          <div className='container'>
            <AddBtn />
            <AddLogModal />
            <EditLogModal />
            <AddTechModal />
            <TechListModal />
            <Logs />
          </div>
        </Fragment>
      </TechState>
    </LogState>
  );
};

export default App;
