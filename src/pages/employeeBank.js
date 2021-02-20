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
  const [userIndex, setUserIndex] = useState(0);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadUsers();
  }, []);

  // function nextUser(userIndex) {
  //   // Ensure that the user index stays within our range of users
  //   if (userIndex >= users.length) {
  //     userIndex = 0;
  //   }
  //   setUser(users[userIndex]);
  //   setUserIndex(userIndex);
  // }

  // function previousUser(userIndex) {
  //   // Ensure that the user index stays within our range of users
  //   if (userIndex < 0) {
  //     userIndex = users.length - 1;
  //   }
  //   setUser(users[userIndex]);
  //   setUserIndex(userIndex);
  // }

  // function handleBtnClick(event) {
  //   // Get the title of the clicked button
  //   const btnName = event.target.getAttribute("data-value");
  //   if (btnName === "next") {
  //     const newUserIndex = userIndex + 1;
  //     nextUser(newUserIndex);
  //   } else {
  //     const newUserIndex = userIndex - 1;
  //     previousUser(newUserIndex);
  //   }
  // }

  function loadUsers() {
        API.getUsers().then(users => {
          console.log("secondTestTest")
          setUsers(users);
          setUser(users[0]);
          setViewState({
            name: users[0].nameF + users[0].nameL,
            image: users[0].image,
            email: users[0].email,
            GHusername: users[0].GHusername

          });
          console.log(users)
        })
        
      .catch(err => console.log(err));
  }

  return (
    <EmployeeContext.Provider value={{user, users}}>
    <div>
      <h1 className="text-center">Shanes Employee Tracker</h1>
      <h3 className="text-center">Wait for more info</h3>
  
        <CardContainer
       
        />

    </div>
    </EmployeeContext.Provider>
  );
}

export default Employees;
