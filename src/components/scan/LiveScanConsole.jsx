import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export default function LiveScanConsole() {
  return (
    <div className="live-console">
      <div className="console-header">
        <div className="console-left">
          <span className="live-dot" />
          <strong>Live Scan Console</strong>
          <span className="running-badge">Running...</span>
        </div>

        <div className="console-actions">
          <span>
            <IoIosArrowDown />
          </span>
          <span>
            <RxCross2 />
          </span>
        </div>
      </div>

      <div className="console-body">
        <div className="activity-log">
          <div className="log-tabs">
            <span className="tab active">Activity Log</span>
            <span className="tab">Verification Loops</span>
          </div>

          <div className="log-content">
            <p>
              <span className="time">[09:00:00]</span> I'll begin systematic
              penetration testing...
            </p>
            <p>
              <span className="time">[09:01:00]</span> Target is online.
              Scanning ports...
            </p>
            <p>
              <span className="time">[09:03:00]</span> Found login page...
            </p>
            <p>
              <span className="time">[09:05:00]</span> Testing credentials...
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="finding-log">
          <div className="finding-header">Finding Log</div>

          <div className="finding-card critical">
            <div className="finding-top">
              <span className="badge critical">Critical</span>
              <span className="time">10:45:23</span>
            </div>
            <div className="finding-card-title">
              SQL Injection in Authentication Endpoint
            </div>
            <p className="endpoint">/api/users/profile</p>
            <p className="desc">
              Time-based blind SQL injection confirmed during authentication
              flow.
            </p>
          </div>

          <div className="finding-card high">
            <div className="finding-top">
              <span className="badge high">High</span>
              <span className="time">10:45:23</span>
            </div>
            <div className="finding-card-title">
              Unauthorized Access to User Metadata
            </div>
            <p className="endpoint">/api/auth/login</p>
            <p className="desc">
              Authenticated low-privilege user was able to access metadata of
              other users. Access control checks were missing.
            </p>
          </div>

          <div className="finding-card medium">
            <div className="finding-top">
              <span className="badge medium">Medium</span>
              <span className="time">10:45:23</span>
            </div>
            <div className="finding-card-title">
              Broken Authentication Rate Limiting
            </div>
            <p className="endpoint">/api/search</p>
            <p className="desc">
              No effective rate limiting detected on login attempts. Automated
              brute-force attempts possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
