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
      <thead>
          <tr className="tableRow">
          <td className="column"></td>
            <td className="column text-left"><h3>Name</h3></td>
            <td className="column text-left"><h3>Email</h3></td>
            <td className="column text-left"><h3>GitHub Username</h3></td>
            <td className="column text-left"><h3>Phone Number</h3></td>
          </tr>
          </thead>
      {employees.map((employees, index) =>(
        
          <tr key={index} className="tableRow">
          <td className="col-3 column thumbNailImage "><img className="thumbNailImage" src={employees.image} alt="user thumbnail" /></td>
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
