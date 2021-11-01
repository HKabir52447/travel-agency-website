import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContextProvider from "./Context/ContextProvider";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import Footer from "./pages/Footer/Footer";
import Notfounding from "./pages/NotFounding/NotFounding";
import "./App.css";
import Header from "./pages/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Myorder from "./pages/Myorder/Myorder";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              {" "}
              <Home></Home>{" "}
            </Route>
            <Route exact path="/services">
              {" "}
              <Services></Services>{" "}
            </Route>
             <PrivateRoute exact path="/myorder">
              {
                <Myorder></Myorder>}
            </PrivateRoute> 
            <Route exact path="/about">
              {" "}
              <About></About>{" "}
            </Route>
            <Route exact path="/contact">
              {" "}
              <Contact></Contact>{" "}
            </Route>
            <Route exact path="/signin">
              {" "}
              <Login></Login>{" "}
            </Route>
            <Route exact path="/signup">
              {" "}
              <Register></Register>{" "}
            </Route>
            <Route exact path="/">
              {" "}
              <Home></Home>{" "}
            </Route>
            <Route>
              {" "}
              <Notfounding></Notfounding>{" "}
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
