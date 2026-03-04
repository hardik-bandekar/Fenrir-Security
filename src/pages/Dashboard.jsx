import StatsCard from "../components/dashboard/StatsCard";
import ScanTable from "../components/dashboard/ScanTable";
import { TfiReload } from "react-icons/tfi";
import Header from "../components/layout/Header";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Header />

      <div className="dashboard-info">
        <div className="org-info">
          <div className="org-item">
            <span className="label">Org:</span>
            <strong>Project X</strong>
          </div>

          <div className="org-item">
            <span className="label">Owner:</span>
            <strong>Nammagiri</strong>
          </div>

          <div className="org-item">
            <span className="label">Total Scans:</span>
            <strong>100</strong>
          </div>

          <div className="org-item">
            <span className="label">Scheduled:</span>
            <strong>1000</strong>
          </div>

          <div className="org-item">
            <span className="label">Rescans:</span>
            <strong>100</strong>
          </div>

          <div className="org-item">
            <span className="label">Failed Scans:</span>
            <strong>100</strong>
          </div>

          <div className="org-item last-updated">
            <span className="label">
              <TfiReload className="reload-icon" />
              10 mins ago
            </span>
          </div>
        </div>

        <div className="severity-stats">
          <StatsCard
            title="Critical Severity"
            count={86}
            change="+2% increase than yesterday"
            color="red"
          />
          <StatsCard
            title="High Severity"
            count={16}
            change="+0.9% increase than yesterday"
            color="orange"
          />
          <StatsCard
            title="Medium Severity"
            count={26}
            change="-0.9% decrease than yesterday"
            color="gold"
          />
          <StatsCard
            title="Low Severity"
            count={16}
            change="+0.9% increase than yesterday"
            color="green"
          />
        </div>
      </div>

      <div className="dashboard-contain">
        <div className="table-container">
          <ScanTable />
        </div>
      </div>
    </div>
  );
}
