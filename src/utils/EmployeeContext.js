import React from "react";
// default context object with properties corresponding to Provider values

const EmployeeContext = React.createContext({
  name: "",
  image: "",
  email: "",
  GHusername: ""
});

export default EmployeeContext;
