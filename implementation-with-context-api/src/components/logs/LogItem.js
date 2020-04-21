import React, { useContext } from "react";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";

import LogContext from "../../context/logs/logContext";

const LogItem = ({ log }) => {
  const logContext = useContext(LogContext);
  const { deleteLogs, setCurrentLog } = logContext;

  const onDelete = () => {
    deleteLogs(log.id);
    M.toast({ html: "Log Deleted" });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrentLog(log)}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{" "}
          <span className='black-text'>{log.tech}</span> on{" "}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='£!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default LogItem;
