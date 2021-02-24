import React from "react";
import EmployeeBank from "./pages/employeeBank";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../src/components/Navbar/style.css"


function App() {
  return (
    <div className="fullApp">
      
     
        <EmployeeBank />
    
      <Footer />
    </div>
  );
}

export default App;
