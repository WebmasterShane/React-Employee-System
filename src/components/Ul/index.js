import React, {useContext} from "react";
import Container from "../CardContainer/index";
import EmployeeContext from "../../utils/EmployeeContext"
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from "../tableData"



function Ulfunction() {
  const employees  = useContext(EmployeeContext)
  console.log(employees)

  const {nameF, nameL, image, email, GHusername } = employees
  return (
    <div className="container">
      <table className="table table-dark">
       <tbody>
        <TableData
        
        
        />
        </tbody>
      </table>
    </div>
  );
}

export default Ulfunction;
