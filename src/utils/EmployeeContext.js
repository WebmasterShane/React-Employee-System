import React from "react";

const EmployeeContext = React.createContext({
  name: "",
  image: "",
  email: "",
  GHusername: "",
  phone: "",
  onClick: () => undefined
});

export default EmployeeContext;
