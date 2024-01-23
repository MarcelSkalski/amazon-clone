import "./App.css";
import Checkout from "../components/Checkout/Checkout";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import { useEffect } from "react";
import { auth } from "../firebase/firebase";
import { useStateValue } from "../context/StateProvider";
import Register from "../components/Register/Register";
import Payment from "../components/Payment/Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route
            exact
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            exact
            path="/payment"
            element={
              <>
                <Header />
                <Payment />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
