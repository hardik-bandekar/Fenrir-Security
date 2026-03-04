import { useNavigate } from "react-router-dom";
import { useState } from "react";
import scans from "../../data/scans";
import StatusChip from "./StatusChip";
import VulnerabilityBadge from "./VulnerabilityBadge";
import { FiSearch } from "react-icons/fi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { LuColumns2 } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";

export default function ScanTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredScans = scans.filter(
    (scan) =>
      scan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scan.type.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div className="table-toolbar">
        <div className="search-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search scans by name or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="right-tools">
          <button className="btn-light">
            <HiOutlineAdjustmentsHorizontal /> Filter
          </button>

          <button className="btn-light">
            <LuColumns2 /> Column
          </button>

          <button className="btn-primary">
            <FiPlus /> New scan
          </button>
        </div>
      </div>

      <table className="scan-table">
        <thead>
          <tr>
            <th>Scan Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Vulnerabilities</th>
            <th>Last Scan</th>
          </tr>
        </thead>

        <tbody>
          {filteredScans.map((scan) => (
            <tr
              key={scan.id}
              onClick={() => navigate(`/scan/${scan.id}`)}
              className="scan-row"
            >
              <td className="scanname">{scan.name}</td>
              <td className="scantype">{scan.type}</td>
              <td>
                <StatusChip status={scan.status} />
              </td>
              <td>
                <div className="progress-wrapper">
                  <div
                    className="progress-bar"
                    style={{ width: `${scan.progress}%` }}
                  />
                  <span>{scan.progress}%</span>
                </div>
              </td>
              <td>
                <VulnerabilityBadge
                  type="critical"
                  count={scan.vulnerabilities.critical}
                />
                <VulnerabilityBadge
                  type="high"
                  count={scan.vulnerabilities.high}
                />
                <VulnerabilityBadge
                  type="medium"
                  count={scan.vulnerabilities.medium}
                />
                <VulnerabilityBadge
                  type="low"
                  count={scan.vulnerabilities.low}
                />
              </td>
              <td>{scan.lastScan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
