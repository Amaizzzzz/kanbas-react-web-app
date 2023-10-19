import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import { MdOutlineSort } from "react-icons/md";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="wd-course-navigation list-group" style={{ width: 150 }}>
      {links.map((link, index) => {
        // Remove spaces and trim from link and pathname
        // MdOutlineSort
        const trimmedLink = link.replace(/\s/g, "").trim();
        const trimmedPathname = pathname.replace(/\s/g, "").trim();

        return (
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${trimmedLink}`}
            className={`list-group-item ${trimmedPathname.includes(trimmedLink) && "active"}`}
          >
          
            {link}
          </Link>
        );
      })}
    </div>
  );
}

export default CourseNavigation;
