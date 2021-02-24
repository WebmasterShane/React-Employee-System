import React, {useContext} from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from "../tableData"



function Ulfunction() {

  return (
    <div className="container">
      <table className="table table-striped table-dark table-hover">
       <tbody>
        <TableData
        />
        </tbody>
      </table>
    </div>
  );
}

export default Ulfunction;
