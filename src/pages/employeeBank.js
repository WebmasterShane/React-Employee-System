import React, { useEffect, useState } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer/index";
import Row from "../components/Row";
import EmployeeContext from "../utils/EmployeeContext"

function Employees() {
  const [viewState, setViewState] = useState({
    nameF: "",
    nameL: "",
    image: "",
    email: "",
    GHusername: ""
  });
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  


  useEffect(() => {
    console.log("test")
    loadUsers();
  }, []);

  function loadUsers() {
        API.getUsers().then(users => {
          console.log("secondTestTest")
          setUsers(users);
          setUser(users[0]);
          setViewState({
            name: users.nameF + users.nameL,
            image: users.image,
            email: users.email,
            GHusername: users.GHusername

          });
          
        })
        
      .catch(err => console.log(err));
  }
  console.log(users)

  return (
    <EmployeeContext.Provider value={users}>
    <div>
      <h1 className="text-center">Shanes Employee Tracker</h1>
      <h3 className="text-center">Wait for more info</h3>
  
        <CardContainer
        employees={users}
       
        />

    </div>
    </EmployeeContext.Provider>
  );
}

export default Employees;
