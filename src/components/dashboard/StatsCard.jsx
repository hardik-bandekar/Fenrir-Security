import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import { BsExclamationTriangle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

export default function StatsCard({ title, count, change, color }) {
  const isIncrease = change.includes("+");

  const getIcon = () => {
    switch (color) {
      case "red":
        return <AiOutlineCloseCircle />;
      case "orange":
        return <BsExclamationTriangle />;
      case "gold":
        return <RiErrorWarningLine />;
      case "green":
        return <AiOutlineSearch />;
      default:
        return null;
    }
  };

  return (
    <div className="stat-card">
      <div className="stat-top">
        <span className="stat-title">{title}</span>
        <div className={`stat-badge ${color}`}>{getIcon()}</div>
      </div>

      <div className="stat-bottom">
        <div className="stat-count">{count}</div>

        <div className={`stat-change ${color}`}>
          {isIncrease ? <FiArrowUpRight /> : <FiArrowDownRight />}
          {change}
        </div>
      </div>
    </div>
  );
}
