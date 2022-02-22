import { useState } from "react";

import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";

import { useSelectedProjectValue } from "../../context";
import AddProject from "../AddProject";
import Projects from "../Projects";

const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" dataa-testid="sidebar">
      <ul className="sidebar__generic">
        <li data-test-id="inbox" className="inbox">
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li data-test-id="today" className="today">
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li data-test-id="next_7" className="next-7">
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};

export default Sidebar;
