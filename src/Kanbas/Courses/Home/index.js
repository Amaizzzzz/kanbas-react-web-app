import React from "react";
import { FaFileImport, FaHome, FaBullhorn, FaChartBar, FaList, FaExclamationCircle, FaUser } from "react-icons/fa";
import ModuleList from "../Modules/ModuleList";

function Home() {
  const buttonStyle = {
    background: "gray",
    width: "150%",
    marginBottom: "10px",
  };
  const buttonStudentStyle = {
    background: "gray",
    width: "22%",
    marginBottom: "0px",
    marginRight: "30px", // Add marginLeft property to shift the button to the left
  };
  const moduleListStyle = {
    width: "73%",
  };

  const todoListStyle = {
    width: "150%",
    borderTop: "1px solid #ccc",
    paddingTop: "10px",
    listStyleType: "none",
  };

  const separatorStyle = {
    borderTop: "1px solid #ccc",
    margin: "20px 0",
  };
  const todoItemStyle = {
    color: "red", // Set the color to red for hyperlinks
    textDecoration: "none", // Remove underline
  };
  
  

  return (
    <div>
      <div className="text-end mb-2">
        <button className="btn btn-primary" style={buttonStudentStyle}>
          <FaUser /> Student View
        </button>
      </div>
      <div className="row">
        <div className="col-10" style={moduleListStyle}>
          <h2>Home</h2>
          <ModuleList />
        </div>
        <div className="col-2">
          <div style={separatorStyle}></div>
          <h2>Status</h2>
          <div>
            <button className="btn btn-primary" style={buttonStyle}>
              <FaFileImport /> Import Existing Content
            </button>
            <button className="btn btn-primary" style={buttonStyle}>
              <FaHome /> Import from Commons
            </button>
            <button className="btn btn-primary" style={buttonStyle}>
              <FaList /> Choose Home Page
            </button>
            <button className="btn btn-primary" style={buttonStyle}>
              <FaBullhorn /> View Course Stream
            </button>
            <button className="btn btn-primary" style={buttonStyle}>
              <FaChartBar /> New Announcement
            </button>
            <button className="btn btn-primary" style={buttonStyle}>
              <FaChartBar /> New Analytics
            </button>
            <button className="btn btn-primary" style={buttonStyle}>
              <FaExclamationCircle /> View Course Notifications
            </button>
          </div>
          <div style={todoListStyle}>
          <h4>To Do</h4>
          <div>
            <span>
              <FaExclamationCircle />{" "}
              <a href="#" style={todoItemStyle}>
                Grade Assignment 1
              </a>{" "}
              <br /> 100 points - Sep 18 at 11:59pm
            </span>
            <span>
              <FaExclamationCircle />{" "}
              <a href="#" style={todoItemStyle}>
                Grade Assignment 2
              </a>{" "}
              <br /> 100 points - Oct 2 at 11:59pm
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );

}

export default Home;
