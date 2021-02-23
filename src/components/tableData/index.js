import React, { useContext } from "react";
import "../tableData/style.css";
import EmployeeContext from "../../utils/EmployeeContext";
import 'bootstrap/dist/css/bootstrap.min.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function TableData() {
  
  // console.log(props)
  // const employees = props.employees
  const employees = useContext(EmployeeContext);
  // const { name, email, GHusername } = useContext(EmployeeContext);
  // console.log("**********",name);
 
 
  // employees.forEach(i => document.getElementById("user").append(<td> + {i.nameF} + {i.nameF} + </td>)
  // )
  /* {employees.map((nameF, nameL, email, GHusername) => (
          <tr>
            <h3>{user.name}</h3>
            <p>{user.location}</p>
            <p>{user.car}</p>

    </tr>) */
    console.log(employees)



  return (
    <div className="employees">
      {employees.map((employees, index) =>(
        <div key={index}>
          <tr>
          <td className="col-md-3 column"><img className="thumbNailImage" src={employees.image} alt="user thumbnail" /></td>
            <td className="col-md-3 column">{employees.nameF +" "+ employees.nameL}</td>
            <td className="col-md-3">{employees.email}</td>
            <td className="col-md-3">{employees.GHusername}</td>
          </tr>
        </div>
      ))}

    </div>

    
  );
  
}

export default TableData;
