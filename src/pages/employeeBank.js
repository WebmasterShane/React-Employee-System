import React, { useEffect, useState } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer/index";
import EmployeeContext from "../utils/EmployeeContext"

function Employees() {
  const [viewState, setViewState] = useState({
    nameF: "",
    nameL: "",
    image: "",
    email: "",
    GHusername: "",
    phone: ""
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
            GHusername: users.GHusername,
            phone: users.phone

          });
          
        })
        
      .catch(err => console.log(err));
  }
  console.log(users)

  return (
    <EmployeeContext.Provider value={users}>
    <div>
        <CardContainer
        
       
        />

    </div>
    </EmployeeContext.Provider>
  );
}

export default Employees;
