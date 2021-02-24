import React, { useEffect, useState } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer/index";
import EmployeeContext from "../utils/EmployeeContext"
import "../components/Navbar/style.css"
import TableData from "../components/tableData"


function Employees() {
  const [viewState, setViewState] = useState({
    nameF: "",
    nameL: "",
    image: "",
    email: "",
    GHusername: "",
    phone: "",
     });
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  let [filteredEmployees, setFilteredEmployees] = useState([])
  let [Alpha, setAlpha] = useState([])

  useEffect(() => {
    console.log("test")
    loadUsers();
  }, []);

  function loadUsers() {
        API.getUsers().then(users => {
          console.log("secondTestTest")
          setUsers(users);
          setUser(users[0]);
          setFilteredEmployees(users);
          setViewState({
            name: users.nameF + users.nameL,
            image: users.image,
            email: users.email,
            GHusername: users.GHusername,
            phone: users.phone
          });
        })
        
      .catch(err => console.log(err));
  }
  console.log(users);

  const handleSearchChange = () => {
    //get input value - change to lowercase
    const inputVal = document.querySelector("#search").value.toLowerCase();
    //array filter
    let filteredEmployeeArr = users.filter((employee) => employee.nameF.toLowerCase().indexOf(inputVal) > -1);
    //set the filtered data to state
    setFilteredEmployees(filteredEmployeeArr);

  };
  const changetoSort = function(){
    console.log(users)
    const sortedemployees = users.sort(function(a,b){
 
      if (a.nameL<b.nameL){
        return -1
      }
      if (a.nameL>b.nameL){
        return 1
      }
      return 0 
    })
    console.log(sortedemployees)
    setAlpha(sortedemployees);
    filteredEmployees = Alpha
  }

  

  return (
    <EmployeeContext.Provider value={filteredEmployees}>
       <nav className="navbar navbar-expand-lg justify-content-center">
       <input classname="justify-content-left col" id="search" onChange={handleSearchChange}/> 
       
      <p className="navbar-brandd-flex justify-content-center font-weight-bold col">
        Employee Tracker
      </p>
    </nav>
    
    <div>
    <div className="container">
      <table className="table table-striped table-dark table-hover">
        

       <tbody>
       <thead>
          <tr className="tableRow">
          <td className="column"><button onClick={changetoSort}>Sort by name</button></td>
            <td className="column text-left"><h3 >Name</h3></td>
            <td className="column text-left"><h3>Email</h3></td>
            <td className="column text-left"><h3>GitHub Username</h3></td>
            <td className="column text-left"><h3>Phone Number</h3></td>
          </tr>
      </thead>
        <TableData
        />
        </tbody>
      </table>
    </div>
    </div>
    </EmployeeContext.Provider>
  );
}

export default Employees;
