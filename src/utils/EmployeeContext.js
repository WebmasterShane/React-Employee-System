import React from "react";
// default context object with properties corresponding to Provider values

const EmployeeContext = React.createContext({
  nameF: "",
  nameL: "",
  image: "",
  email: "",
  GHusername: ""
});

export default EmployeeContext;
