export default function StatusChip({ status }) {
  const getStatusColor = () => {
    switch (status) {
      case "Completed":
        return "#52c41a"; // green
      case "Scheduled":
        return "#8c8c8c"; // gray
      case "Failed":
        return "#ff4d4f"; // red
      default:
        return "#8c8c8c";
    }
  };

  return (
    <span
      className="status-chip"
      style={{
        backgroundColor: getStatusColor(),
        color: "white",
      }}
    >
      {status}
    </span>
  );
}
