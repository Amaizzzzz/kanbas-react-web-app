import Home from "./home";
import Login from "./login";
import Profile from "./profile";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import UserList from "./users/list";
import UserDetails from "./users/details";
import store from "./store";
import { Provider } from "react-redux";
import Navigation from "./nav";
import CurrentUser from "./users/currentUser";
import Account from "./users/account";
import Signup from "./users/signup";
import UserTable from "./users/table";
import Signin from "./users/signin";
import Nav from "./users/nav";

function Project() {
  return (
    <div className="row">
      <div className="col-2">
        <Nav />
      </div>
      <div className="col-10">
      <Routes>
        <Route path="/admin/users" element={<UserTable />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/:id" element={<Account />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
      </div>
    </div>
  );
}
export default Project;
