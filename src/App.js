import React from "react";
import EmployeeBank from "./pages/employeeBank";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <EmployeeBank />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
