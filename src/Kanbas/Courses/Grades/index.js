import React from "react";
import db from "../../Database";
import {
  useParams,
  Link,
} from "react-router-dom";
import { FaFilter} from "react-icons/fa";
import { FaSearch, FaCloudUploadAlt, FaCog, FaUserGraduate } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";


function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Gradebook Dropdown */}
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="gradebookDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Gradebook
          </button>
          <ul className="dropdown-menu" aria-labelledby="gradebookDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>

        {/* Buttons on the right */}
        <div>
          <button className="btn btn-primary me-2"><FaCloudUploadAlt /> Import</button>
          <button className="btn btn-success me-2"><FaCloudDownloadAlt /> Export</button>
          <button className="btn btn-light me-2"><FaCog /> Settings</button>
        </div>


     
        </div>
 
           {/* Filter and Search Bars (Side by Side) */}
          <div className="d-flex align-items-center mb-3">
            <div className="col">
              <h5>Student Names</h5>
            </div>
            <div className="col">
              <h5>Assignment Names</h5>
            </div>
          </div>

          <div className="d-flex align-items-center mb-3">
            <div className="input-group me-3">
              <span className="input-group-text"><FaSearch /></span>
              <input type="text" className="form-control" placeholder="Search Students" aria-label="Search Students" />
            </div>
            <div className="input-group">
              <span className="input-group-text"><FaSearch /></span>
              <input type="text" className="form-control" placeholder="Search Assignments" aria-label="Search Assignments" />
            </div>
          </div>

        <div className="text-start">
          <button className="btn btn-primary">Apply Filters</button>
        </div>

      <h1>Grades</h1>
      <div className="table-responsive">
        <table className="table table-striped"> {/* Add the "table-striped" class here */}
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment, index) => { // Add an index for tracking odd/even rows
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr key={user._id} className={index % 2 === 0 ? "even" : "odd"}>
                  {/* Apply the class based on the index */}
                  <td>{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                    );
                    return (
                      <td key={assignment._id}>
                        {grade?.grade || ""}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;