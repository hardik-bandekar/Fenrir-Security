import { FiCheckSquare, FiFileText } from "react-icons/fi";
import { TbWorldSearch, TbSitemap } from "react-icons/tb";
import { IoFlaskOutline } from "react-icons/io5";

export default function ScanProgressCard() {
  return (
    <div className="scan-progress-card">
      <div className="progress-left">
        <div className="progress-circle">
          <div className="circle-inner">
            <h2>0%</h2>
            <span>In Progress</span>
          </div>
        </div>
      </div>

      <div className="vertical-divider" />

      {/* Right Content */}
      <div className="progress-content">
        {/* Steps */}
        <div className="scan-steps">
          <div className="step active">
            <TbWorldSearch />
            <span className="icon">Spidering</span>
          </div>

          <div className="step">
            <TbSitemap />
            <span>Mapping</span>
          </div>

          <div className="step">
            <IoFlaskOutline />
            <span>Testing</span>
          </div>

          <div className="step">
            <FiCheckSquare />
            <span>Validating</span>
          </div>

          <div className="step">
            <FiFileText />
            <span>Reporting</span>
          </div>
        </div>

        {/* Meta Info Row */}
        <div className="scan-meta">
          <div>
            <span className="meta-label">Scan Type</span>
            <strong>Grey Box</strong>
          </div>

          <div>
            <span className="meta-label">Targets</span>
            <strong>google.com</strong>
          </div>

          <div>
            <span className="meta-label">Started At</span>
            <strong>Nov 22, 09:00AM</strong>
          </div>

          <div>
            <span className="meta-label">Credentials</span>
            <strong>2 Active</strong>
          </div>

          <div>
            <span className="meta-label">Files</span>
            <strong>Control.pdf</strong>
          </div>

          <div>
            <span className="meta-label">Checklists</span>
            <strong className="teal">40/350</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
