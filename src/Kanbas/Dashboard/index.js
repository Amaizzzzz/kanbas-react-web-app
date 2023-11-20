import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./Dashboard.css";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {
  
    return (
      <div>
        <h1>Dashboard</h1>
        <div>
          <h2>Published Courses ({courses.length})</h2>
        </div>
  
     
        <input  placeholder = "course name "value={course.name} className="form-control" 
          onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        
        <button className="add-btn " onClick={addNewCourse} >
          Add
        </button>
       <button className = "btn btn-success"onClick={updateCourse} >update</button>
        
  
    <div className="row">
      {courses.map((course) => (
        <div key={course._id} className="col-md-6 col-lg-4 mb-4">
          <div className="card text-center">

            <div className="course-card"> {/* Add p-3 for padding */}
              <img
                src="https://htmlcolorcodes.com/assets/images/colors/dark-red-color-solid-background-1920x1080.png"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>
              <Link to={`/Kanbas/Courses/${course._id}`} className="btn " style={{ color: "white",backgroundColor :"grey" }}>
              View Course
            </Link>
              {/* Additional content like course description */}
            </div>
            <div className="card-footer">
            
              <button onClick={() => setCourse(course)} className="btn btn-primary me-2">
                Edit
              </button>
              <button onClick={() => deleteCourse(course._id)} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
   
  );
}

export default Dashboard;