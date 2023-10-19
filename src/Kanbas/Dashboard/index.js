import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";
import {GrNotes} from "react-icons/gr";
function Dashboard() {
const courses = db.courses;

  return (
    <div className="dashboard-container"> {/* Add the container class to create a container with padding */}
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course, index) => (
          <div className="col">
            <div className="course-card"> {/* Add p-3 for padding */}
              <img
                src="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body-custom">
                 <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                </Link>
                
                <h6 className="card-title">{course._id} {course.number} {course.semester}</h6>

                <p className="card-text">
                  CS{course.number}_{course.section} {course.semester} Semester<br />
                  {course.startDate} - {course.endDate} <br />
                  
                </p>

                <GrNotes className="wd-icon" />,

                

                 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
