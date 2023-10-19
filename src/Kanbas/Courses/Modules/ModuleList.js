import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./moduleStyle.css";
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

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonDown = (buttonName) => {
    setClickedButton(buttonName);
  };

  const handleButtonUp = () => {
    setClickedButton(null);
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex">
          <button className="btn btn-light me-2">Collapse All</button>
          <button className="btn btn-light me-2">View Progress</button>
          <div className="btn-group me-2">
            <button className="btn btn-light me-2">Publish All</button>
            <button className="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"></button>
          </div>
          <button className="btn btn-danger me-2">+ Module</button>
          <button className="btn btn-light mr-2"><HiOutlineEllipsisVertical /></button>
        </div>
      </div>

      <ul className="list-group" style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}>
        {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item-custom" style={{ marginBottom: "10px" }}>
                <h3>{module.name}</h3>
                <p>{module.description}</p>
                {module.lessons && (
                  <ul className="list-group" style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}>
                    {module.lessons.map((lesson, index) => (
                      <li key={lesson._id} className="list-group-item">
                        <h4 className="lesson-header">
                          <span className="lesson-icons-left">
                            <PiDotsSixVertical className="wd-icon" />
                            <GoTriangleRight className="wd-icon" />
                          </span>
                          <span className="lesson-title">{lesson.name}</span>
                          <span className="lesson-icons">
                            <AiFillCheckCircle className="wd-icon" />
                            <RiArrowDownSFill className="wd-icon" />
                            <AiOutlinePlus className="wd-icon" />
                            <BiDotsVerticalRounded className="wd-icon" />
                            <FaEllipsisV className="wd-icon" /> {/* Replace the icon here */}
                          </span>
                        </h4>
                        <p>{lesson.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default ModuleList;
