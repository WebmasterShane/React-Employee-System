import React, { useContext } from "react";
import "../tableData/style.css";
import EmployeeContext from "../../utils/EmployeeContext";
import 'bootstrap/dist/css/bootstrap.min.css';


function TableData() {

  const employees = useContext(EmployeeContext);
    console.log(employees)

 
    
   
      // const changetoSort = function(employees){
      //   const sortedemployees = employees.sort(function(a,b){
     
      //     if (a.nameL<b.nameL){
      //       return -1
      //     }
      //     if (a.nameL>b.nameL){
      //       return 1
      //     }
      //     return 0 
      //   })
      //   console.log(sortedemployees)
      //   employees = sortedemployees
        
      // }

  return (
    <div className="employees">
      {employees.map((employees, index) =>(
        
          <tr key={index} className="tableRow">
          <td className="col-3 column thumbNailImage "><img className="thumbNailImage thumbNailImageradius" src={employees.image} alt="user thumbnail" /></td>
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
