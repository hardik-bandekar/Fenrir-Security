import { IoHomeOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div className="dashboard-header">
      <div className="breadcrumb">
        <span className="breadcrumb-main">Scan</span>

        <IoHomeOutline className="home-icon" />
        <span className="divider-dot">/</span>
        <span className="nonactive">Private Assets</span>
        <span className="divider-dot">/</span>
        <span className="active">New Scan</span>
      </div>

      <div className="header-actions">
        <button className="btn-outline">Export Report</button>
        <button className="btn-danger">Stop Scan</button>
      </div>
    </div>
  );
}
