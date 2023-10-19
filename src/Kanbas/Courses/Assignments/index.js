import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaFileAlt, FaCalendar, FaListOl, FaStopwatch } from "react-icons/fa";
import { PiDotsSixVertical } from "react-icons/pi";
import { GoTriangleRight } from "react-icons/go";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { BsPlus } from "react-icons/bs";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
    return (
      <div>
        <h2>Assignments for course {courseId}</h2>
        <div className="list-group">
        {courseAssignments.map((assignment) => (
        <Link
          key={assignment._id}
          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
          className="list-group-item"
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex wd-icon-group">
              <PiDotsSixVertical className="wd-icon" />
              <GoTriangleRight className="wd-icon" />
            </div>

            <div className="d-flex flex-column align-items-start me-auto">
              <h5 className="mb-0 text-left">{assignment.title}</h5>
              <p className="mb-0 text-left pl-0">{assignment.details}</p>
            </div>

            <div>
              <span className="badge bg-primary me-2">
                <FaFileAlt /> {assignment.type}
              </span>
              <span className="badge bg-secondary me-2">
                <FaCalendar /> {assignment.deadline}
              </span>
              <span className="badge bg-info me-2">
                <FaListOl /> {assignment.points} points
              </span>
              <span className="badge bg-warning">
                <FaStopwatch /> {assignment.duration || "No time limit"}
              </span>
            </div>

            <div>
              <AiFillCheckCircle className="wd-icon" />
              <RiArrowDownSFill className="wd-icon" />
              <AiOutlinePlus className="wd-icon" />
              <BiDotsVerticalRounded className="wd-icon" />
              <FaEllipsisV className="wd-icon" />
            </div>
          </div>
        </Link>
      ))}


        </div>
      </div>
    );
    
  }
    
export default Assignments;