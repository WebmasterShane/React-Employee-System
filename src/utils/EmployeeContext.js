import React from "react";

const EmployeeContext = React.createContext({
  name: "",
  image: "",
  email: "",
  GHusername: "",
  phone: ""
});

export default EmployeeContext;
