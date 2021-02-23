import React from "react";
import EmployeeBank from "./pages/employeeBank";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
     
        <EmployeeBank />
    
      <Footer />
    </div>
  );
}

export default App;
