import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
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
