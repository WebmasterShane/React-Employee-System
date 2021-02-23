import React, { useContext } from "react";
import "../tableData/style.css";
import EmployeeContext from "../../utils/EmployeeContext";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function TableData() {
  
  // console.log(props)
  // const employees = props.employees
  const employees = useContext(EmployeeContext);
  // const { name, email, GHusername } = useContext(EmployeeContext);
  // console.log("**********",name);
 
 
  employees.forEach(i => document.getElementById("user").append("<td> {i.nameF} + {i.nameF} </td>")
  )



  return (
    
      <tr id="user">
      <td id="name"></td>
      <td id="email"></td>
      <td id="Github"></td>
      </tr>
    
  );
  
}

export default TableData;
