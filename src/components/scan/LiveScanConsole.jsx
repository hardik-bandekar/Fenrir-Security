import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { activityLogs } from "../../data/liveConsoleData";
import { findings } from "../../data/findingLogData";

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
            {activityLogs.map((log, index) => (
              <p key={index}>
                <span className="time">[{log.time}]</span> {log.message}
              </p>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="finding-log">
          <div className="finding-header">Finding Log</div>

          {findings.map((item, index) => (
            <div key={index} className={`finding-card ${item.severity}`}>
              <div className="finding-top">
                <span className={`badge ${item.severity}`}>{item.label}</span>
                <span className="time">{item.time}</span>
              </div>

              <div className="finding-card-title">{item.title}</div>
              <p className="endpoint">{item.endpoint}</p>
              <p className="desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
