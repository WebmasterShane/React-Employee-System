import React, {useContext} from "react";
import Ul from "../Ul/index" ;
import EmployeeContext from "../../utils/EmployeeContext"
import "./style.css";



function CardContainer() {
  console.log("CardTestCardTest")
  const employees = useContext(EmployeeContext)
  const {nameF, nameL, image, email, GHusername } = employees
  console.log(employees)

  return (
    <div className="jumbotron card-container">
      <p>This is a test</p>
      <Ul
      nameF={nameF}
      nameL={nameL}
      image={image}
      email={email}
      username={GHusername}
      />
    </div>
  );
}

export default CardContainer;
