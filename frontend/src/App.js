// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Pages/footer/footer";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer/>
    </>
  );
}

export default App;
