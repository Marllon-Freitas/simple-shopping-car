import { BrowserRouter } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//pages
import Pages from "./pages/Pages";

//globalStyles
import { GlobalStyles } from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <GlobalStyles />
      <Navbar />
      <Pages />
    </BrowserRouter>
  );
}

export default App;