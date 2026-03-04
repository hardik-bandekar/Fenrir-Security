import "../../AppLayout.css";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  LayoutDashboard,
  Folder,
  FileText,
  Calendar,
  Bell,
  Settings,
  HelpCircle,
} from "lucide-react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function Sidebar() {
  const { toggleTheme } = useTheme();

  return (
    <div className="sidebar">
      {/* Top Logo */}
      <div className="sidebar-top">
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-dot"></div>
          </div>
          <span className="logo-text">aps</span>
        </div>

        <button className="theme-toggle" onClick={toggleTheme}>
          {document.body.classList.contains("dark") ? (
            <MdOutlineLightMode size={20} />
          ) : (
            <MdDarkMode size={20} />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        <NavLink to="/dashboard">
          <LayoutDashboard size={16} />
          Dashboard
        </NavLink>

        <NavLink to="/projects">
          <Folder size={16} />
          Projects
        </NavLink>

        <NavLink to="/scans">
          <FileText size={16} />
          Scans
        </NavLink>

        <NavLink to="/schedule">
          <Calendar size={16} />
          Schedule
        </NavLink>

        <div className="divider" />

        <NavLink to="/notifications">
          <Bell size={16} />
          Notifications
        </NavLink>

        <NavLink to="/settings">
          <Settings size={16} />
          Settings
        </NavLink>

        <NavLink to="/support">
          <HelpCircle size={16} />
          Support
        </NavLink>
      </nav>

      {/* Bottom User */}
      <div className="user">
        <div className="avatar">A</div>
        <div>
          <p className="email">admin@edu.com</p>
          <p className="role">Security Lead</p>
        </div>
      </div>
    </div>
  );
}
