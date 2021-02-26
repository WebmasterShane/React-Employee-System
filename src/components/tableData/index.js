import React, { useContext } from "react";
// import "../tableData/style.css";
import EmployeeContext from "../../utils/EmployeeContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar/style.css'

function TableData() {

  const employees = useContext(EmployeeContext);
    console.log(employees)
  return (
    <div className="employees">
      {employees.map((employees, index) =>(
        
          <tr key={index} className="tableRow">
          <td className="column"><img className="thumbNailImage" src={employees.image} alt="user thumbnail" /></td>
            <td className="column text-left">{employees.nameF +" "+ employees.nameL}</td>
            <td className="column text-left">{employees.email}</td>
            <td className="column text-left">{employees.GHusername}</td>
            <td className="column text-left">{employees.phone}</td>
          </tr>
  
      ))}

    </div>

    
  );
  
}

export default TableData;
