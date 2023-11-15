import Navbar from "./user.InterfaceLayer/Components/Navbar/index/index";
import * as ST from "./user.InterfaceLayer/router/styled/styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./user.InterfaceLayer/Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ST.PageContainer>
      <ToastContainer />
      <ST.NavContainer>
        <Navbar />
      </ST.NavContainer>
      <ST.MainContent>
        <Outlet />
      </ST.MainContent>
      <ST.FooterContainer>
        <Footer />
      </ST.FooterContainer>
    </ST.PageContainer>
  );
}

export default App;
