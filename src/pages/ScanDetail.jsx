import Header from "../components/layout/Header";
import ScanProgressCard from "../components/scan/ScanProgressCard";
import LiveScanConsole from "../components/scan/LiveScanConsole";

export default function ScanDetail() {
  return (
    <div className="dashboard">
      <Header />
      <div className="scan-detail-container">
        <ScanProgressCard />
        <LiveScanConsole />
      </div>
    </div>
  );
}
