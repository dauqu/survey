import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashb";
import Edit_profile from "./components/Edit_profile";
import Add_remove_user from "./components/Add_remove_user";
import About from "./components/About";
import Notifications from "./components/Notifications";
import Election from "./components/Election";
import Report from "./components/Report";
import Issues from "./components/Issues";
import Survey_details from "./components/Survey_details";
import Voters_list from "./components/Voters_list";
import Survey from "./components/Survey";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/edit-profile" element={<Edit_profile />} />
          <Route path="/add-remove-user" element={<Add_remove_user />} />
          <Route path="/about" element={<About />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/election" element={<Election />} />
          <Route path="/report" element={<Report />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/survey-details" element={<Survey_details />} />
          <Route path="/voters-list" element={<Voters_list />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
