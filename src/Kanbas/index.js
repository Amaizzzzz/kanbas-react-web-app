import axios from "axios";
import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
// import Account from "./Account";
import Dashboard from "./Dashboard";

import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store/index.js";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const initialCourseState = {
    name: "",
    number: "",
    startDate: "",
    endDate: ""
  };
  const [course, setCourse] = useState(initialCourseState);

  const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
  const URL = `${API_BASE}/courses`;

  const findAllCourses = async () => {
    try {
      const response = await axios.get(URL);
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  const addCourse = async () => {
    try {
      const response = await axios.post(URL, course);
      setCourses([response.data, ...courses]);
      setCourse(initialCourseState);
    } catch (error) {
      console.error("Error adding course:", error);
      // Handle error appropriately
    }
  };

  const deleteCourse = async (courseId) => {
    try {
      await axios.delete(`${URL}/${courseId}`);
      setCourses(courses.filter((c) => c._id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
      // Handle error appropriately
    }
  };

  const updateCourse = async () => {
    try {
      const response = await axios.put(`${URL}/${course._id}`, course);
      setCourses(courses.map(c => c._id === course._id ? { ...c, ...course } : c));
      setCourse(initialCourseState);
    } catch (error) {
      console.error("Error updating course:", error);
      // Handle error appropriately
    }
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>
            } />
            <Route path="Courses/:courseId/*" element={
              <Courses courses={courses} />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;
