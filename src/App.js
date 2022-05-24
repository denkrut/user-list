import { React } from "react";
import UserList from "./components/user-list/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from "./pages/user-profile/user-profile";
import { Link } from "react-router-dom";
import TestPage from "./pages/test/TestPage";
import UsersFromDB from "./pages/users-from-db/UsersFromDB";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Link to="/">HOME</Link>
        <Link to="/usersFormDb">Users From DB</Link>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/usersFormDb" element={<UsersFromDB />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
