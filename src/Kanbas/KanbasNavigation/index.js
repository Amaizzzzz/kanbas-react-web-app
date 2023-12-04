import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import {BiSolidHelpCircle} from "react-icons/bi";
import {MdGroups2} from "react-icons/md";
import {AiTwotoneCalendar} from "react-icons/ai";
import {HiOutlineInboxIn} from "react-icons/hi";
import {SiAndroidstudio} from "react-icons/si";
import {SiWikimediacommons} from "react-icons/si";
import { AiOutlineHistory } from "react-icons/ai";


import "./index.css";
import { icons } from "react-icons";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Groups", "Calendar", "Inbox", "Studio", "Commons", "History", "Help"];

  const linkToIconMap = { 
    // use different icons for each link
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Groups: <MdGroups2 className="wd-icon" />,
    Calendar: <AiTwotoneCalendar className="wd-icon" />,
    Inbox: <HiOutlineInboxIn className="wd-icon" />,
    Studio: <SiAndroidstudio className="wd-icon" />,
    Commons: <SiWikimediacommons className="wd-icon" />,
    History: <AiOutlineHistory className="wd-icon" />,
    Help: <BiSolidHelpCircle className="wd-icon" />,
   


  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 100 }}>
      <img src = "/images/logo_NEU.jpg" alt = "logo" width = "100" height = "100" align = "center"/>

      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;