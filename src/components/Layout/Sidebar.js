import React from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li data-testid="inbox" className="inbox">
          <div>
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li data-testid="today" className="today">
          <div>
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li data-testid="next_7" className="next_7">
          <div>
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 Days</span>
          </div>
        </li>
      </ul>
      <div className="sidebar__middle">
          <span>
            <FaChevronDown />
          </span>
          <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">projects will be here!</ul>
      TODO add project component here
    </div>
  );
};
